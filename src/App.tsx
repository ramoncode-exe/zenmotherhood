import { Heart, Moon, Baby, CheckCircle, Star, Sparkles, Shield, BookOpen, Target, TrendingUp, Users, Award, Clock, Zap, Gift } from 'lucide-react';
import { useEffect, useRef } from 'react';
import img1 from './assets/1.svg';
import img2 from './assets/2.svg';

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const stripeLink = "https://buy.stripe.com/5kQfZia4i68I50119D7AI0e";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-rose-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          ''
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 leading-tight animate-fade-in-up">
            You can SLEEP THROUGH THE NIGHT
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 bg-gradient-to-r from-rose-600 to-blue-600 bg-clip-text text-transparent animate-fade-in-up animation-delay-100">
            and still BREASTFEED without STRESS and PAIN.
          </p>

          <p className="text-lg sm:text-xl text-slate-700 mb-10 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Sleep through the night and breastfeed without stress or pain.
            Discover the <strong>Japanese secrets</strong> that are transforming motherhood for thousands of women worldwide.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <Moon className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-slate-800">Peaceful Nights</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <Heart className="w-6 h-6 text-rose-600" />
              <span className="font-semibold text-slate-800">Pain-Free Feeding</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <Baby className="w-6 h-6 text-purple-600" />
              <span className="font-semibold text-slate-800">Calm Baby</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-rose-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Did You Know <span className="text-rose-600">93% of Mothers</span> Face This?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Mothers with babies aged 0-12 months struggle with breastfeeding difficulties and severe sleep deprivation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 border-l-4 border-rose-500 p-8 lg:p-10 rounded-r-2xl mb-10 reveal shadow-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-rose-600" />
              Does This Sound Familiar?
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">You can barely remember the last time you slept more than 4 hours straight.</p>
              </div>
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">Your body aches, your mood swings constantly, and you feel like you're "at your limit."</p>
              </div>
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">Breastfeeding, which should be a moment of love and connection, sometimes turns into pain, tension, and tears.</p>
              </div>
              <div className="flex items-start gap-4 bg-white/60 backdrop-blur p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                <p className="text-slate-700 leading-relaxed">Deep down, you wonder if you're doing something wrong — even though you're giving your best every single day.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 lg:p-10 rounded-2xl reveal shadow-lg">
            <div className="flex items-start gap-4">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-slate-800 leading-relaxed mb-4">
                  <strong>The truth is, it's not your fault.</strong> Most mothers go through this because no one teaches what really happens to the body and mind after childbirth.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Everything changes — hormones, sleep, emotions, routines — and the simple act of breastfeeding can become a physical and emotional challenge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              What If There's A <span className="text-blue-600">Different Path</span>?
            </h2>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto">
              A lighter, more natural, and proven way to breastfeed peacefully, sleep better, and recover emotional balance — without magic formulas or complications.
            </p>
          </div>

          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl mb-10 reveal border border-slate-100">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">The Japanese Mother's Secret</h3>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              For decades, Japanese mothers have been applying a set of simple, natural, and surprisingly effective practices to raise calm babies — and maintain emotional balance even in the first months of motherhood.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              These techniques are little known outside Japan, precisely because the Japanese people are very reserved and traditional about their family customs.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl border border-blue-100">
              <h4 className="font-bold text-slate-900 mb-5 flex items-center gap-2 text-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
                These practices involve:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">Small routine adjustments</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">Specific body postures during breastfeeding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 leading-relaxed">Rituals of calm and connection between mother and baby</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 reveal">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all border border-slate-100 hover:scale-105 duration-300">
              <Moon className="w-14 h-14 text-blue-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2 text-lg">Deep Sleep</h4>
              <p className="text-sm text-slate-600">Baby sleeps longer and more peacefully</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all border border-slate-100 hover:scale-105 duration-300">
              <Heart className="w-14 h-14 text-rose-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2 text-lg">Pain-Free Feeding</h4>
              <p className="text-sm text-slate-600">No tension, stronger bond</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all border border-slate-100 hover:scale-105 duration-300">
              <Sparkles className="w-14 h-14 text-purple-600 mx-auto mb-4" />
              <h4 className="font-bold text-slate-900 mb-2 text-lg">Emotional Balance</h4>
              <p className="text-sm text-slate-600">Safe and confident</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-rose-50 px-6 py-3 rounded-full mb-6 border border-blue-100">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-lg font-bold text-slate-900">Introducing</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
              Zen Motherhood
            </h2>
            <p className="text-2xl text-slate-700 font-semibold">
              Peaceful Breastfeeding & Restful Nights
            </p>
            <img src={img1} alt="image ebook" className='max-md:w-[400px] w-[500px] mx-auto p-2' />
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              An eBook created with care, inspired by Eastern techniques that have helped thousands of Japanese families for generations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-rose-50 p-8 lg:p-14 rounded-3xl shadow-2xl mb-10 reveal border border-slate-200">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 text-center">Inside the eBook, You'll Discover:</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <Sparkles className="w-7 h-7 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-800 leading-relaxed"><strong>The most effective Japanese techniques</strong> to calm your baby and stimulate deep, natural sleep.</p>
              </div>
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <Heart className="w-7 h-7 text-rose-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-800 leading-relaxed"><strong>Simple methods for comfortable breastfeeding</strong> with emotional bonding, eliminating pain and tension.</p>
              </div>
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <Shield className="w-7 h-7 text-purple-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-800 leading-relaxed"><strong>Balance and self-care practices</strong> to reduce stress and strengthen your emotional energy.</p>
              </div>
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <Moon className="w-7 h-7 text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-800 leading-relaxed"><strong>Restorative nighttime routines</strong> that help mother and baby sleep better together.</p>
              </div>
              <div className="flex items-start gap-4 bg-white/80 backdrop-blur p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <Award className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-slate-800 leading-relaxed"><strong>How to feel safe, confident, and at peace</strong> with your role as a mother.</p>
              </div>
            </div>

            <div className="mt-10 text-center bg-white/60 backdrop-blur p-6 rounded-xl border border-slate-200">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <p className="text-lg font-bold text-slate-900">
                  40 pages of light, visual, easy-to-apply content
                </p>
              </div>
              <p className="text-slate-600">
                Based on studies and traditions spanning generations in Japan — now adapted to your reality.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-slate-100 border-l-4 border-blue-600 p-8 rounded-r-2xl reveal shadow-lg">
            <p className="text-xl text-slate-900 font-semibold text-center flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 text-rose-600" />
              Zen Motherhood is more than an eBook. It's an experience of reconnection between you and your baby.
            </p>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 text-center reveal">
            Imagine Your Life <span className="text-rose-600">Transformed</span>
          </h2>

          <div className="bg-white p-8 lg:p-14 rounded-3xl shadow-2xl reveal border border-slate-200">
            <div className="space-y-6 mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                Imagine, for a moment, <strong>waking up in the morning feeling rested, calm, and energized</strong>.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Your baby slept well through the night, and you finally got consecutive hours of sleep.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                When breastfeeding, you feel <strong>comfort, love, and connection</strong> — no pain, no tension, no fear of doing something wrong.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl mb-8 border border-blue-100">
              <p className="text-slate-800 leading-relaxed mb-6">
                Your body begins to respond better. Your mind is lighter. And gradually, your home returns to that atmosphere of tranquility and joy you've always wanted.
              </p>
              <p className="text-slate-800 leading-relaxed font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-600" />
                People around you notice. They say things like:
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-5 rounded-xl italic text-slate-700 border-l-4 border-blue-400">
                "Wow, you seem so much calmer."
              </div>
              <div className="bg-rose-50 p-5 rounded-xl italic text-slate-700 border-l-4 border-rose-400">
                "Your baby seems so peaceful."
              </div>
              <div className="bg-purple-50 p-5 rounded-xl italic text-slate-700 border-l-4 border-purple-400">
                "What are you doing differently?"
              </div>
            </div>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              And you smile. Because deep down, you know you've finally found a natural, loving way to experience motherhood — <strong>without guilt, without pressure, without exhaustion</strong>.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-10 rounded-2xl text-center shadow-xl">
              <p className="text-2xl lg:text-3xl font-bold mb-4">
                You feel in control again.
              </p>
              <p className="text-xl mb-4">
                Confident, balanced, present.
              </p>
              <div className="flex items-center justify-center gap-2 text-lg opacity-95">
                <Heart className="w-6 h-6" />
                <p>Because when mom is well, the baby flourishes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What Other Mothers Are Saying
            </h2>
            <p className="text-lg text-slate-600">
              Real transformation stories
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "Before finding Maternity Zen, I was crying almost every night from exhaustion. Now my baby sleeps 6 hours straight and I wake up with energy again. It feels like I've rediscovered the joy of being a mom.",
                name: "Emma L., 28",
                location: "Austin, Texas",
                color: "from-rose-50 to-pink-50"
              },
              {
                text: "Breastfeeding used to be the hardest part of my day. I was in pain and constantly doubting myself. The Japanese techniques completely changed that — now it's the most peaceful moment of my routine.",
                name: "Sophie R., 32",
                location: "London, UK",
                color: "from-blue-50 to-cyan-50"
              },
              {
                text: "I never realized how anxious I was until I started practicing the routines from Maternity Zen. I'm calmer, more connected, and my baby definitely feels it too.",
                name: "Olivia K., 30",
                location: "Toronto, Canada",
                color: "from-purple-50 to-pink-50"
              },
              {
                text: "Honestly, I thought it would be just another eBook… but I was wrong. The content is so practical, gentle, and surprisingly effective. I sleep better, my baby is calmer, and I finally feel confident as a mom.",
                name: "Rachel P., 34",
                location: "Sydney, Australia",
                color: "from-green-50 to-emerald-50"
              },
              {
                text: "After just one week following the steps, I noticed a huge difference. My baby started sleeping longer and my body finally feels rested. Every new mom needs this guide.",
                name: "Hannah G., 26",
                location: "New York City, USA",
                color: "from-orange-50 to-amber-50"
              },
              {
                text: "This book brought peace back into our home. My husband even said, 'You look like yourself again.' I can't thank Maternity Zen enough for helping me feel balanced and confident.",
                name: "Chloe D., 35",
                location: "Dublin, Ireland",
                color: "from-teal-50 to-cyan-50"
              }
            ].map((testimonial, index) => (
              <div key={index} className={`bg-gradient-to-br ${testimonial.color} p-8 rounded-2xl shadow-lg reveal border border-slate-200 hover:shadow-xl transition-all`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-600">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 mb-4">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What Data & Science Say
            </h2>
            <p className="text-lg text-slate-600">
              About motherhood and calm practices
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { stat: "93%", text: "of mothers report sleeping less than 4 hours per night in the first 3 months after childbirth.", color: "rose" },
              { stat: "1 in 2", text: "mothers experience pain or stress during breastfeeding — often due to lack of guidance and incorrect posture.", color: "blue" },
              { stat: "70%", text: "of mothers in Japan use motherhood routines based on calm and connection, inspired by traditional Zen practices.", color: "purple" },
              { stat: "42%", text: "less stress and better sleep quality in just 14 days for mothers who practice relaxation techniques.", color: "green" }
            ].map((item, index) => (
              <div key={index} className={`bg-white p-8 lg:p-10 rounded-2xl shadow-lg border-l-4 border-${item.color}-500 reveal hover:shadow-xl transition-all`}>
                <p className={`text-5xl font-bold text-${item.color}-600 mb-3`}>{item.stat}</p>
                <p className="text-slate-700 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-100 to-slate-100 p-10 rounded-2xl shadow-xl reveal border border-blue-200">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-slate-800 leading-relaxed mb-4">
                  <strong>87% of mothers</strong> in the Zen Motherhood community noticed a <strong>significant improvement in sleep and emotional balance</strong> within the first week.
                </p>
                <p className="text-slate-700 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                  These results aren't magic — they're based on real methods.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section id="offer" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              It's Time to <span className="text-rose-600">Transform Your Motherhood</span>
            </h2>
            <p className="text-lg text-slate-600">
              Everything you need in one complete eBook
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-rose-50 p-8 lg:p-14 rounded-3xl shadow-2xl mb-10 reveal border border-slate-200">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 mb-3">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <p className="text-lg text-slate-700 font-semibold">Complete eBook</p>
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-3">Zen Motherhood</h3>
              <p className="text-xl text-slate-700">40 pages of transformative content</p>
            </div>

            <div className="bg-white/90 backdrop-blur p-8 rounded-2xl mb-8 shadow-lg border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-6 text-center text-lg">What You'll Receive:</h4>
              <div className="space-y-4">
                {[
                  "Proven Japanese techniques for pain-free, stress-free breastfeeding",
                  "Longer, more peaceful nights of sleep for both you and your baby",
                  "Emotional balance recovery and confidence in motherhood",
                  "Practical routines that transform your daily life"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700"><strong>{item}</strong></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5 mb-10">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-7 rounded-2xl shadow-lg">
                <div className="flex items-start gap-3">
                  <Gift className="w-7 h-7 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lg mb-2">BONUS 1: Healthy Recipes for Baby</p>
                    <p className="text-blue-50">Practical, nutritious ideas to keep your baby well-fed and happy.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-7 rounded-2xl shadow-lg">
                <div className="flex items-start gap-3">
                  <Gift className="w-7 h-7 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lg mb-2">BONUS 2: Breastfeeding & Care Checklist</p>
                    <p className="text-rose-50">Practical list to track posture, hunger cues, hydration, and well-being.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-7 rounded-2xl shadow-lg">
                <div className="flex items-start gap-3">
                  <Gift className="w-7 h-7 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-lg mb-2">BONUS 3: Daily Routine Guide with Baby</p>
                    <p className="text-purple-50">Step-by-step visual guide to organize day and night with baby.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mb-8">
              <img src={img2} alt="image ebook" className='max-md:w-[400px] w-[500px] mx-auto p-0' />
              <p className="text-slate-500 line-through text-xl mb-3">Regular Price $47.00</p>
              <div className="inline-block bg-white px-10 py-6 rounded-2xl shadow-xl border-2 border-blue-200">
                <p className="text-sm text-slate-600 mb-2 font-semibold">Limited Time Offer</p>
                <p className="text-6xl font-bold text-blue-600 mb-2">$14.90</p>
                <p className="text-sm text-slate-600 flex items-center justify-center gap-2">
                  <Clock className="w-4 h-4" />
                  One-time payment • No subscriptions
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href={stripeLink}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xl font-bold px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 mb-6"
              >
                <Zap className="w-6 h-6" />
                GET MY COPY NOW
              </a>
              <div className="flex items-center justify-center gap-2 text-sm text-slate-600">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Instant access to eBook and all bonuses
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 text-center reveal">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5 text-green-700" />
                <p className="font-bold text-green-800">Instant Access</p>
              </div>
            </div>
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-700" />
                <p className="font-bold text-blue-800">Read on Any Device</p>
              </div>
            </div>
            <div className="bg-rose-50 p-6 rounded-xl border border-rose-200">
              <div className="flex items-center justify-center gap-2">
                <Award className="w-5 h-5 text-rose-700" />
                <p className="font-bold text-rose-800">Real Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-blue-100 to-rose-100">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            Don't Wait to Live Motherhood <br />
            <span className="text-blue-600">With Ease and Harmony</span>
          </h2>

          <p className="text-xl text-slate-700 leading-relaxed mb-10">
            Zen Motherhood is available for only <strong>$14.90</strong>, but this opportunity won't be available forever.
          </p>

          <div className="bg-white p-10 rounded-3xl shadow-2xl mb-10 border border-slate-200">
            <img src={img1} alt="image ebook" className='max-md:w-[400px] w-[500px] mx-auto p-2' />
            <p className="text-lg text-slate-700 mb-8">
              Imagine feeling rested, confident, and present for your baby, applying simple techniques that really work.
            </p>
            

            <div className="space-y-4 mb-8">
              {[
                "Instant access to eBook and exclusive bonuses",
                "Proven Japanese techniques",
                "Practical routines to balance body, mind, and baby"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={stripeLink}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-2xl font-bold px-16 py-7 rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 mb-8"
          >
            <Zap className="w-7 h-7" />
            BUY NOW — $14.90
          </a>

          <div className="flex items-center justify-center gap-2 text-lg text-slate-700">
            <p>
              Remember: when mom rests and feels confident, <br />
              <strong>the whole baby and family flourish.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-rose-400" />
            <p className="text-slate-300 text-lg font-semibold">Zen Motherhood</p>
          </div>
          <p className="text-slate-400 mb-2">© 2025 Maternity Zen. All rights reserved.</p>
          <p className="text-slate-500 text-sm">Transforming motherhood, one mom at a time.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
