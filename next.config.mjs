import withTM from 'next-transpile-modules';

// This is the default (also the `src` folder is supported out of the box)
const withTranspileModules = withTM([
  'rc-util', // Add any other modules that need transpiling
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    'antd',
    '@ant-design',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-notification',
    'rc-tooltip',
    'rc-tree',
    'rc-table'
  ],
};

export default withTranspileModules(nextConfig);
