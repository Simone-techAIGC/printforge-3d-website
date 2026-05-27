import { Link } from "react-router-dom";
import {
  ArrowRight,
  Globe,
  Layers,
  Package,
  Star,
  Zap,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn, CountUp } from "@/hooks/use-scroll-animation";

const stats = [
  { value: 50, suffix: "+", label: "覆盖国家" },
  { value: 120, suffix: "+", label: "打印材料" },
  { value: 50000, suffix: "+", label: "交付订单" },
  { value: 98, suffix: "%", label: "客户满意度" },
];

const products = [
  {
    title: "工业级3D打印",
    desc: "大尺寸、高精度，适用于航空航天、汽车制造等高端领域",
    icon: Layers,
    image:
      "https://dingtalk-ai-app.oss-cn-zhangjiakou.aliyuncs.com/generated_images/20260525_200252_5194caeb.png",
  },
  {
    title: "桌面级3D打印",
    desc: "小巧灵活、成本可控，满足个人创作者和中小企业需求",
    icon: Package,
    image:
      "https://dingtalk-ai-app.oss-cn-zhangjiakou.aliyuncs.com/generated_images/20260525_200317_3c276061.png",
  },
  {
    title: "定制化解决方案",
    desc: "从设计到交付全流程定制，满足您的个性化制造需求",
    icon: Zap,
    image:
      "https://dingtalk-ai-app.oss-cn-zhangjiakou.aliyuncs.com/generated_images/20260525_200348_5c1f8c5b.png",
  },
];

const steps = [
  {
    num: "01",
    title: "提交需求",
    desc: "上传3D模型文件或描述您的定制需求",
  },
  {
    num: "02",
    title: "方案确认",
    desc: "工程师评估并提供最优打印方案和报价",
  },
  {
    num: "03",
    title: "精密制造",
    desc: "采用工业级设备进行高精度打印生产",
  },
  {
    num: "04",
    title: "全球交付",
    desc: "质检合格后通过全球物流网络快速送达",
  },
];

const testimonials = [
  {
    name: "张明",
    role: "某汽车零部件公司 采购总监",
    content:
      "PrintForge的工业级3D打印服务帮助我们缩短了40%的研发周期，零件精度完全满足车规级要求。",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "创意设计工作室 创始人",
    content:
      "从设计稿到实物只用了3天，材料选择丰富，打印质量超出预期。跨境物流也非常高效。",
    rating: 5,
  },
  {
    name: "李明华",
    role: "医疗器械公司 研发经理",
    content:
      "医疗级材料的生物相容性认证齐全，打印精度达到微米级，是我们长期信赖的合作伙伴。",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-4/5 opacity-20">
          <img
            src="https://dingtalk-ai-app.oss-cn-zhangjiakou.aliyuncs.com/generated_images/20260525_200252_5194caeb.png"
            alt="3D Printing"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-32">
          <FadeIn>
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 mb-6">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400 text-sm font-medium">
                  服务全球 50+ 国家和地区
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                用增材制造
                <br />
                <span className="text-blue-400">连接全球创意</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
                PrintForge Global 为全球客户提供工业级3D打印与跨境电商服务，从设计到交付，让定制制造触达世界每个角落。
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white cta-glow rounded-lg px-8 h-12">
                    浏览产品
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-lg px-8 h-12"
                  >
                    获取报价
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 border-y border-slate-800">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                核心产品与服务
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                从工业级精密制造到桌面级创意打印，我们提供全方位的3D打印解决方案
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <FadeIn key={product.title} delay={i * 150}>
                <div className="group bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <product.icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {product.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">
                      {product.desc}
                    </p>
                    <Link
                      to="/products"
                      className="inline-flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
                    >
                      了解更多
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                制造流程
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                四步完成从设计到交付的全流程，高效透明
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 150}>
                <div className="relative text-center">
                  <div className="text-5xl font-bold text-slate-800 mb-4">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-slate-700 to-transparent" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                客户评价
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                来自全球各行业客户的真实反馈
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <FadeIn key={item.name} delay={i * 150}>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    "{item.content}"
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-700/50">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-semibold">
                      {item.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">
                        {item.name}
                      </div>
                      <div className="text-slate-500 text-xs">{item.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              准备好开始您的3D打印之旅了吗？
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              无论您是需要原型验证、小批量生产还是定制化零件，我们都能为您提供专业解决方案
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white cta-glow rounded-lg px-8 h-12">
                  立即咨询
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  variant="outline"
                  className="border-slate-700 text-slate-300 hover:bg-slate-800 rounded-lg px-8 h-12"
                >
                  查看产品目录
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 border-t border-slate-800 bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {[
                "ISO 9001 认证",
                "CE 认证",
                "FDA 注册",
                "RoHS 合规",
                "REACH 合规",
              ].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-slate-500"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
