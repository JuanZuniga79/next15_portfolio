import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			new URL("https://raw.githubusercontent.com/JuanZuniga79/**"),
		],
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

