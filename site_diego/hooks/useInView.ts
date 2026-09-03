'use client';

import { useRef } from 'react';

export function useInView(threshold = 0.05) {
  const ref = useRef<any>(null);
  return { ref, isVisible: true };
}