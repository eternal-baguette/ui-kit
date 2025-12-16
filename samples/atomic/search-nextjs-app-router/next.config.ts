import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@eternal-baguette/atomic-react',
    '@eternal-baguette/atomic',
  ],
};

export default nextConfig;
