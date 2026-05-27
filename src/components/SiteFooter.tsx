import { Link } from "react-router-dom";
import { Printer, Mail, Phone, MapPin, Globe } from "lucide-react";

const footerLinks = {
  products: [
    { label: "工业级3D打印", path: "/products" },
    { label: "桌面级3D打印", path: "/products" },
    { label: "材料选择", path: "/products" },
    { label: "定制服务", path: "/products" },
  ],
  company: [
    { label: "关于我们", path: "/about" },
    { label: "技术实力", path: "/about" },
    { label: "全球布局", path: "/about" },
    { label: "加入我们", path: "/about" },
  ],
  support: [
    { label: "帮助中心", path: "/contact" },
    { label: "联系我们", path: "/contact" },
    { label: "常见问题", path: "/contact" },
    { label: "隐私政策", path: "/contact" },
  ],
};

export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="grid-pattern border-t border-slate-800">
        <div className="max-w-[1280px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Printer className="w-5 h-5 text-white" />
                </div>
                <span className="text-white font-bold text-lg tracking-tight">
                  PrintForge Global
                </span>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                用增材制造连接全球创意，让定制设计触达世界每个角落。我们致力于为全球客户提供高品质、高效率的3D打印解决方案。
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>contact@printforge.global</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+86 400-888-9999</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>深圳市南山区科技园</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">产品与服务</h4>
              <ul className="space-y-2">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">关于公司</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">支持</h4>
              <ul className="space-y-2">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2026 PrintForge Global. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Globe className="w-4 h-4 text-slate-500" />
            <span className="text-xs text-slate-500">
              服务覆盖全球 50+ 国家和地区
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
