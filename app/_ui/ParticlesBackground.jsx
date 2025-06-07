"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback, useEffect, useState } from "react";
import particlesConfig from "./particles-config.json";

export default function ParticlesBackground() {
  const [isMounted, setIsMounted] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) return null;

  return <Particles id="background" init={particlesInit} options={particlesConfig} />;
}
