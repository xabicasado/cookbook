import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // https://nextjs.org/docs/app/getting-started/cache-components
  // cacheComponents: true,
  compiler: {
    styledComponents: true,
  },
}

export default nextConfig
