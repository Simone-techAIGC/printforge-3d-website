import { useState } from "react";
import {
  Layers,
  Zap,
  Package,
  ArrowRight,
  Check,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/hooks/use-scroll-animation";

const categories = [
  {
    id: "industrial",
    label: "工业级",
    icon: Layers,
    items: [
      {
        name: "金属3D打印",
        desc: "不锈钢、钛合金、铝合金等金属材料，适用于航空航天、医疗器械等领域",
        specs: ["精度 ±0.05mm", "最大尺寸 500×500×500mm", "表面粗糙度 Ra 3.2μm"],
        price: "¥500 起",
      },
      {
        name: "工程塑料打印",
        desc: "ABS、PC、PEEK等高性能工程塑料，满足工业零部件需求",
        specs: ["精度 ±0.1mm", "最大尺寸 400×400×400mm", "耐温 -40°C~260°C"],
        price: "¥200 起",
      },
      {
        name: "砂型铸造打印",
        desc: "用于铸造行业的砂型和砂芯直接打印，缩短铸造周期",
        specs: ["精度 ±0.3mm", "最大尺寸 1500×800×600mm", "无需模具"],
        price: "¥800 起",
      },
    ],
  },
  {
    id: "desktop",
    label: "桌面级",
    icon: Package,
    items: [
      {
        name: "PLA/PETG 打印",
        desc: "环保材料，适合原型验证、教育模型、创意产品",
        specs: ["精度 ±0.15mm", "最大尺寸 300×300×300mm", "多色可选"],
        price: "¥50 起",
      },
      {
        name: "树脂光固化",
        desc: "高精度细节还原，适用于珠宝、牙科、手办模型",
        specs: ["精度 ±0.025mm", "最大尺寸 200×125×200mm", "表面光滑"],
        price: "¥100 起",
      },
      {
        name: "柔性材料打印",
        desc: "TPU/TPE 等柔性材料，适用于密封件、缓冲垫、可穿戴设备",
        specs: ["精度 ±0.2mm", "最大尺寸 250×250×250mm", "邵氏硬度 70A-95A"],
        price: "¥80 起",
      },
    ],
  },
  {
    id: "custom",
    label: "定制方案",
    icon: Zap,
    items: [
      {
        name: "小批量生产",
        desc: "10-10000件小批量定制生产，无需开模，快速交付",
        specs: ["交货 3-7天", "支持多材料", "品质检测"],
        price: "按需报价",
      },
      {
        name: "设计优化服务",
        desc: "专业工程师协助优化3D模型，提升打印成功率和性能",
        specs: ["DFM分析", "拓扑优化", "轻量化设计"],
        price: "¥300 起",
      },
      {
        name: "后处理服务",
        desc: "打磨、喷漆、电镀、阳极氧化等多种表面处理工艺",
        specs: ["手工打磨", "CNC精加工", "表面涂层"],
        price: "¥100 起",
      },
    ],
  },
];

const materials = [
  "PLA", "ABS", "PETG", "TPU", "PC", "Nylon", "PEEK",
  "不锈钢 316L", "钛合金 Ti64", "铝合金 AlSi10Mg",
  "光敏树脂", "陶瓷", "砂型", "碳纤维复合材料",
];

const pricingPlans = [
  {
    name: "标准版",
    price: "¥99",
    unit: "/件起",
    desc: "适合个人创作者和小批量需求",
    features: [
      "PLA/PETG 材料",
      "标准精度 ±0.15mm",
      "7个工作日交付",
      "基础质量检测",
      "邮件技术支持",
    ],
    cta: "开始使用",
    popular: false,
  },
  {
    name: "专业版",
    price: "¥299",
    unit: "/件起",
    desc: "适合中小企业和专业设计师",
    features: [
      "全材料库可选",
      "高精度 ±0.05mm",
      "3-5个工作日交付",
      "完整质检报告",
      "专属客户经理",
      "设计优化建议",
    ],
    cta: "立即咨询",
    popular: true,
  },
  {
    name: "企业版",
    price: "定制",
    unit: "",
    desc: "适合大型企业和长期合作",
    features: [
      "全材料+特殊材料",
      "最高精度 ±0.025mm",
      "加急 24h 交付",
      "第三方认证检测",
      "7×24 技术支持",
      "专属产线",
      "月结/年结",
    ],
    cta: "联系销售",
    popular: false,
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("industrial");

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              产品与<span className="text-blue-400">服务</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              从工业级精密制造到桌面级创意打印，从标准件到完全定制，
              我们提供覆盖全场景的3D打印解决方案
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 border-y border-slate-800 bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">
                材料库
              </h2>
              <p className="text-slate-400">
                120+ 种打印材料，覆盖所有主流工业和消费级应用
              </p>
            </div>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {materials.map((m) => (
              <span
                key={m}
                className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tabs + Products */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-blue-500 text-white"
                      : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentCategory.items.map((item, i) => (
              <FadeIn key={item.name} delay={i * 150}>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 h-full flex flex-col hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">{item.desc}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {item.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <span className="text-orange-400 font-bold text-lg">
                      {item.price}
                    </span>
                    <a
                      href="/contact"
                      className="inline-flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
                    >
                      咨询详情
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                定价方案
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                灵活的定价策略，满足不同规模客户的需求
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 150}>
                <div
                  className={`relative rounded-xl p-8 h-full flex flex-col ${
                    plan.popular
                      ? "bg-blue-500/10 border-2 border-blue-500"
                      : "bg-slate-800/50 border border-slate-700/50"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      最受欢迎
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6">{plan.desc}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">
                      {plan.price}
                    </span>
                    {plan.unit && (
                      <span className="text-slate-400 text-sm ml-1">
                        {plan.unit}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <Check className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={
                      plan.popular
                        ? "bg-orange-500 hover:bg-orange-600 text-white cta-glow w-full"
                        : "bg-slate-700 hover:bg-slate-600 text-white w-full"
                    }
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                定制流程
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                简单四步，从想法到实物
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "上传模型",
                desc: "支持 STL、OBJ、STEP 等主流3D格式",
              },
              {
                step: "02",
                title: "选择材料",
                desc: "根据需求选择最合适的打印材料",
              },
              {
                step: "03",
                title: "确认报价",
                desc: "系统自动计算，工程师审核确认",
              },
              {
                step: "04",
                title: "生产交付",
                desc: "精密制造，质检合格后全球配送",
              },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 150}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-slate-800 mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {s.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
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
              有项目需要3D打印？
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              发送您的需求，我们的工程师将在2小时内为您提供专业方案和报价
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white cta-glow rounded-lg px-8 h-12 transition-colors"
            >
              立即获取报价
              <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
