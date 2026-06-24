import { QRCodeSVG } from "qrcode.react";

export function SiteQRCode({ site, baseUrl }) {
  const url = `${baseUrl}/site/${site.qrSlug}`;

  return (
    <div className="bg-parchment border-2 border-bark/15 p-5 flex flex-col items-center gap-3">
      <div className="bg-white p-3 border border-bark/10">
        <QRCodeSVG
          value={url}
          size={140}
          fgColor="#1C1410"
          bgColor="#FFFFFF"
          level="M"
        />
      </div>
      <p className="font-mono text-[11px] text-umber/70 text-center break-all max-w-[160px]">
        {url}
      </p>
      <p className="font-mono text-[10px] uppercase tracking-wider text-clay">
        Scan at site
      </p>
    </div>
  );
}
