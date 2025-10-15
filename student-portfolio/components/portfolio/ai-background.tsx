"use client"

import React from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

type Node = {
  x: number
  y: number
  vx: number
  vy: number
}

export function AiBackground({ className }: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const rafRef = React.useRef<number | null>(null)
  const nodesRef = React.useRef<Node[]>([])
  const prefersReducedRef = React.useRef<boolean>(false)

  React.useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    prefersReducedRef.current = media.matches
    const onChange = () => (prefersReducedRef.current = media.matches)
    media.addEventListener?.("change", onChange)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const initNodes = () => {
      const rect = canvas.getBoundingClientRect()
      const count = Math.floor((rect.width * rect.height) / 14000) // density-based
      nodesRef.current = Array.from({ length: Math.max(24, count) }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      }))
    }

    const getStyle = (v: string, fallback: string) => {
      const s = getComputedStyle(document.documentElement).getPropertyValue(v)?.trim()
      return s || fallback
    }

    // Use theme tokens for colors (keeps light/dark consistent)
    const lineColor = getStyle("--color-primary", "rgba(0,0,0,0.5)")
    const nodeColor = getStyle("--color-accent", "rgba(0,0,0,0.6)")
    const bg = getStyle("--color-background", "transparent")

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect()
      // Clear
      ctx.clearRect(0, 0, width, height)

      // Subtle background grid to feel technical
      ctx.save()
      ctx.strokeStyle = lineColor
      ctx.globalAlpha = 0.06
      const grid = 28
      for (let x = 0; x < width; x += grid) {
        ctx.beginPath()
        ctx.moveTo(x + 0.5, 0)
        ctx.lineTo(x + 0.5, height)
        ctx.stroke()
      }
      for (let y = 0; y < height; y += grid) {
        ctx.beginPath()
        ctx.moveTo(0, y + 0.5)
        ctx.lineTo(width, y + 0.5)
        ctx.stroke()
      }
      ctx.restore()

      const nodes = nodesRef.current

      // Connections
      ctx.save()
      ctx.strokeStyle = lineColor
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist2 = dx * dx + dy * dy
          const max = 140
          if (dist2 < max * max) {
            const alpha = 0.18 * (1 - Math.sqrt(dist2) / max)
            ctx.globalAlpha = alpha
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      ctx.restore()

      // Nodes
      ctx.save()
      ctx.fillStyle = nodeColor
      for (const n of nodes) {
        ctx.globalAlpha = 0.45
        ctx.beginPath()
        ctx.arc(n.x, n.y, 2.2, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    const step = () => {
      const { width, height } = canvas.getBoundingClientRect()
      const nodes = nodesRef.current

      if (!prefersReducedRef.current) {
        for (const n of nodes) {
          n.x += n.vx
          n.y += n.vy
          if (n.x < 0 || n.x > width) n.vx *= -1
          if (n.y < 0 || n.y > height) n.vy *= -1
        }
      }
      draw()
      rafRef.current = requestAnimationFrame(step)
    }

    const onResize = () => {
      resize()
      initNodes()
      draw()
    }

    const ro = new ResizeObserver(onResize)
    ro.observe(canvas)

    onResize()
    step()

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      media.removeEventListener?.("change", onChange)
    }
  }, [])

  return <canvas ref={canvasRef} className={cn("w-full h-full", className)} aria-hidden="true" />
}
