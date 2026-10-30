import { TradePageView, tradeMetadata } from "@/components/site/TradePage";
import { requireTrade } from "@/lib/trades";

// Content lives in lib/trades.ts; the page body is shared by every trade.
// Old URL: /trades/roofers (308s here — see next.config.mjs).
const trade = requireTrade("roofers");

export const metadata = tradeMetadata(trade);

export default function Page() {
  return <TradePageView trade={trade} />;
}
