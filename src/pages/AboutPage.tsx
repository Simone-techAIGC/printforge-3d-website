import {
  Globe,
  Users,
  Award,
  Target,
  Lightbulb,
  Heart,
  Shield,
  TrendingUp,
} from "lucide-react";
import { FadeIn, CountUp } from "@/hooks/use-scroll-animation";

const milestones = [
  { year: "2018", event: "PrintForge Global 在深圳成立" },
  { year: "2019", event: "首条工业级3D打印产线投产" },
  { year: "2020", event: "开通跨境电商业务，服务覆盖10个国家" },
  { year: "2021", event: "获得ISO 9001质量管理体系认证" },
  { year: "2022", event: "全球仓库布局完成，欧美亚三地仓储" },
  { year: "2023", event: "年交付订单突破30000单" },
  { year: "2024", event: "材料库扩展至120+种，覆盖全行业需求" },
  { year: "2025", event: "服务覆盖全球50+国家和地区" },
];

const values = [
  {
    icon: Lightbulb,
    title: "创新驱动",
    desc: "持续探索增材制造技术前沿，为客户提供最先进的解决方案",
  },
  {
    icon: Shield,
    title: "品质至上",
    desc: "严格的质量控制体系，确保每一件产品都达到行业标准",
  },
  {
    icon: Globe,
    title: "全球视野",
    desc: "立足中国，服务全球，构建高效的跨境制造与物流网络",
  },
  {
    icon: Heart,
    title: "客户为先",
    desc: "以客户需求为核心，提供从咨询到售后的全生命周期服务",
  },
];

const stats = [
  { value: 8, suffix: "年", label: "行业深耕", icon: TrendingUp },
  { value: 500, suffix: "+", label: "团队规模", icon: Users },
  { value: 50, suffix: "+", label: "技术专利", icon: Award },
  { value: 12, suffix: "个", label: "全球仓库", icon: Globe },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              关于 <span className="text-blue-400">PrintForge</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              我们是一支由工程师、设计师和跨境贸易专家组成的团队，
              致力于用增材制造技术连接全球创意，让定制设计触达世界每个角落。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-slate-800 bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100} className="text-center">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                我们的故事
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                从一间工作室到全球制造网络，每一步都凝聚着对精密制造的执着追求
              </p>
            </div>
          </FadeIn>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800" />
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 100}>
                <div
                  className={`relative flex items-center mb-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-blue-500 rounded-full -translate-x-1.5 md:-translate-x-1.5" />
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}
                  >
                    <span className="text-orange-400 font-bold text-lg">
                      {m.year}
                    </span>
                    <p className="text-slate-300 mt-1">{m.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                核心价值观
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                这些价值观指引着我们的每一个决策和行动
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 100}>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center h-full hover:border-blue-500/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                全球布局
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                我们在全球建立了完善的制造与仓储网络，确保快速响应和高效交付
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                region: "亚太地区",
                locations: "深圳（总部）、上海、东京、新加坡",
                desc: "研发与制造中心，服务亚太市场",
              },
              {
                region: "欧洲地区",
                locations: "汉堡、阿姆斯特丹",
                desc: "欧洲仓储与服务中心，覆盖欧盟市场",
              },
              {
                region: "北美地区",
                locations: "洛杉矶、纽约",
                desc: "北美运营中心，服务美洲市场",
              },
            ].map((office, i) => (
              <FadeIn key={office.region} delay={i * 150}>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      {office.region}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-2">
                    {office.locations}
                  </p>
                  <p className="text-slate-500 text-sm">{office.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              加入我们，共创未来
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              无论您是寻找合作伙伴还是职业机会，我们都期待与您交流
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white cta-glow rounded-lg px-8 h-12 transition-colors"
            >
              联系我们
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
