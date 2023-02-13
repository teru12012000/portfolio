const {
  createVanillaExtractPlugin
} = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode:true,
  swcMinify:true,
  images:{
    domains:['terusi-product.microcms.io']
  }
};

module.exports = withVanillaExtract(nextConfig);