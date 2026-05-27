import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/hooks/use-scroll-animation";
import { toast } from "sonner";

const faqs = [
  {
    q: "3D打印的交货周期是多久？",
    a: "标准订单通常在3-7个工作日内完成生产并交付。加急订单可在24-48小时内完成，具体取决于模型复杂度和材料选择。",
  },
  {
    q: "支持哪些3D文件格式？",
    a: "我们支持 STL、OBJ、STEP、3MF、FBX 等主流3D文件格式。如果您只有2D图纸，我们的工程师也可以协助转换为3D模型。",
  },
  {
    q: "最小起订量是多少？",
    a: "我们没有最小起订量限制，单件也可以打印。但批量订单（10件以上）可以享受更优惠的单价。",
  },
  {
    q: "如何保证打印质量？",
    a: "所有产品出厂前都经过严格的质量检测，包括尺寸精度测量、表面质量检查和材料性能测试。我们提供完整的质量检测报告。",
  },
  {
    q: "支持哪些付款方式？",
    a: "支持银行转账、PayPal、信用卡、支付宝、微信支付等多种付款方式。企业客户可申请月结或年结。",
  },
];

const offices = [
  {
    city: "深圳（总部）",
    address: "深圳市南山区科技园南区T3栋12楼",
    phone: "+86 755-8888-9999",
    email: "shenzhen@printforge.global",
  },
  {
    city: "上海",
    address: "上海市浦东新区张江高科技园区科苑路88号",
    phone: "+86 21-5888-9999",
    email: "shanghai@printforge.global",
  },
  {
    city: "汉堡（欧洲）",
    address: "Hamburg, Germany - Speicherstadt District",
    phone: "+49 40-8888-9999",
    email: "europe@printforge.global",
  },
  {
    city: "洛杉矶（北美）",
    address: "Los Angeles, CA - Silicon Beach Area",
    phone: "+1 310-888-9999",
    email: "america@printforge.global",
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("提交成功！我们将在2小时内与您联系");
      setForm({ name: "", email: "", company: "", message: "" });
      setSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              联系<span className="text-blue-400">我们</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              无论您有任何问题或合作意向，我们的团队都随时准备为您提供帮助
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        邮箱 *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      公司名称
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) =>
                        setForm({ ...form, company: e.target.value })
                      }
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="请输入公司名称（选填）"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      需求描述 *
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="请描述您的3D打印需求，包括材料偏好、数量、用途等..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="bg-orange-500 hover:bg-orange-600 text-white cta-glow rounded-lg px-8 h-12 w-full md:w-auto"
                  >
                    {submitting ? (
                      "提交中..."
                    ) : (
                      <>
                        提交需求
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </FadeIn>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <FadeIn delay={100}>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    联系方式
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-slate-400">邮箱</div>
                        <div className="text-white text-sm">
                          contact@printforge.global
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-slate-400">电话</div>
                        <div className="text-white text-sm">
                          +86 400-888-9999
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-slate-400">工作时间</div>
                        <div className="text-white text-sm">
                          周一至周五 9:00 - 18:00 (GMT+8)
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                      <div>
                        <div className="text-sm text-slate-400">总部地址</div>
                        <div className="text-white text-sm">
                          深圳市南山区科技园
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">
                    全球办事处
                  </h3>
                  <div className="space-y-4">
                    {offices.map((office) => (
                      <div
                        key={office.city}
                        className="pb-4 border-b border-slate-700/50 last:border-0 last:pb-0"
                      >
                        <div className="text-white text-sm font-medium mb-1">
                          {office.city}
                        </div>
                        <div className="text-slate-400 text-xs mb-1">
                          {office.address}
                        </div>
                        <div className="text-slate-500 text-xs">
                          {office.phone}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                常见问题
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                以下是客户最常咨询的问题，希望能帮助您快速了解我们的服务
              </p>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white font-medium pr-4">
                      {faq.q}
                    </span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-700/50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                全球服务网络
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                我们的制造中心和仓储网络遍布全球主要经济体
              </p>
            </div>
          </FadeIn>
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl h-80 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <p className="text-slate-400">
                深圳 · 上海 · 东京 · 新加坡 · 汉堡 · 阿姆斯特丹 · 洛杉矶 · 纽约
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
