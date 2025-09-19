"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

const highlights = [
  {
    title: "自動車木版画のパイオニア",
    description:
      "1983〜84年に三菱自動車の海外向けモータースポーツ・カレンダーを木版画と油彩で制作し、量産車やレーシングマシンを伝統技法で描いたことで注目を集めました。",
  },
  {
    title: "国際イベントでの活躍",
    description:
      "倉敷オート・アート展、モントレー・ヒストリック・オートモービル・レースの記念木版画など、国内外のヒストリックカーレースを題材に制作・展示を続けました。",
  },
  {
    title: "資料収集家としての顔",
    description:
      "アルファロメオを中心に歴史的レース資料やミニカー、切手を収集。木版画制作のための膨大なリサーチが作品の精緻なディテールを支えています。",
  },
];

const timeline = [
  {
    period: "1935年",
    title: "愛知県豊橋市に生まれる",
    detail: "幼い頃から機械と絵画に親しみ、大学ではアマチュアレースに参加。モータースポーツ文化への愛着を深める。",
  },
  {
    period: "1983〜1984年",
    title: "三菱自動車モータースポーツ・カレンダーを制作",
    detail:
      "デザイナーだった学生時代の友人からの依頼で木版画を採用。日本の木版文化を海外へ広める契機となる。",
  },
  {
    period: "1986〜1988年",
    title: "瀬戸大橋ヒストリック・カーフェスティバルのポスターを担当",
    detail: "岡山・倉敷で開催されたイベントの公式ビジュアルを木版画で表現し、ファンの記憶に残るポスターを残す。",
  },
  {
    period: "1989年",
    title: "三菱オート・アートギャラリーに出品",
    detail: "アメリカ・ヨーロッパを巡回する展覧会で自動車木版画を披露し、国際的な評価を得る。",
  },
  {
    period: "1993年以降",
    title: "モントレー・ヒストリック・オートモービル・レース記念版画を毎年制作",
    detail: "米国カリフォルニア州で行われる名門イベントのオフィシャルアートを担い、ヒストリックレーサーを讃え続けた。",
  },
  {
    period: "2000年代",
    title: "アルファロメオ関連企画展を多数開催",
    detail:
      "横浜や町田でアルファロメオとミッレミリアをテーマにした木版画展を企画。イタリア車文化の魅力を日本で紹介。",
  },
  {
    period: "2022年11月23日",
    title: "永眠",
    detail: "87歳で逝去。日本自動車アーティスト協会（JAAA）会員として、木版画でモータースポーツの歴史を語り継いだ足跡は今もファンに愛されている。",
  },
];

const works = [
  {
    name: "Mille Miglia 1947 The Winner, Alfa Romeo 8C 2900B",
    detail:
      "1947年のミッレミリア優勝車を題材にした代表作。細かな彫りで再現されるボディラインとイタリアの空気感が魅力。",
  },
  {
    name: "Seto Ohashi Historic Car Festival Posters",
    detail:
      "瀬戸大橋を駆け抜けるクラシックカーの疾走感を大胆な構図で表現。国内イベント公式ビジュアルの先駆的シリーズ。",
  },
  {
    name: "Monterey Historic Automobile Races Commemorative Prints",
    detail:
      "米国の名門イベントで毎年制作した記念版画。レースごとに車種や背景のリサーチを重ね、現地のファンにも愛蔵される。",
  },
];

const instagramHighlights = [
  {
    code: "DF31SBuhCQ1",
    title: "6C 1750 Gran Sport に再会",
    dateLabel: "2025年2月9日",
    description:
      "木版画のモデルにもなった Alfa Romeo 6C 1750 Gran Sport に会うため、トヨタ博物館を訪れた記録。作品と実車を見比べられる貴重なフィールドノートです。",
    quote: "「クルマ館エントランスに2月24日(月・祝)まで展示予定だそうです。」",
    image: "/instagram/DF31SBuhCQ1.jpg",
    alt: "トヨタ博物館に展示されたアルファロメオ 6C 1750 GS の写真",
    link: "https://www.instagram.com/p/DF31SBuhCQ1/",
  },
  {
    code: "DIFt85lJDFw",
    title: "自宅展示で受け継ぐ情熱",
    dateLabel: "2025年4月6日",
    description:
      "『Giro di Mikawa Enshu 2025』のオフィシャル・フォトグラファーに自宅展示を公開。牧田作品が家族とファンをつなぐ場として生き続けている様子がわかります。",
    quote: "「父の遺影がいつもより笑っているように感じられました。」",
    image: "/instagram/DIFt85lJDFw.jpg",
    alt: "牧田家自宅の展示室と木版画作品の写真",
    link: "https://www.instagram.com/p/DIFt85lJDFw/",
  },
  {
    code: "DJ2eP7tTvL2",
    title: "ヴィンテージフェスで出会った新たな一枚",
    dateLabel: "2025年5月19日",
    description:
      "豊橋のイベントで偶然見つけたアルファロメオ題材の作品を新たにコレクションへ。牧田作品を探し、手元に残そうとする家族の姿が垣間見えます。",
    quote: "「今日から我が家の牧田哲明コレクションに仲間入りです♪」",
    image: "/instagram/DJ2eP7tTvL2.jpg",
    alt: "アルファロメオの木版画を抱える家族の写真",
    link: "https://www.instagram.com/p/DJ2eP7tTvL2/",
  },
  {
    code: "DOICUankr7i",
    title: "誕生日に振り返る木版画制作の思い",
    dateLabel: "2025年9月3日",
    description:
      "家族が注文したバースデーケーキとともに、制作当時の父の心情に思いを巡らせる投稿。作品が時間を越えて語りかける様子が伝わります。",
    quote: "「父がこの木版画をどんな気持ちで制作したのか、年齢を重ねるたびに少しずつわかるようになってきました。」",
    image: "/instagram/DOICUankr7i.jpg",
    alt: "木版画とケーキが並ぶテーブルの写真",
    link: "https://www.instagram.com/p/DOICUankr7i/",
  },
  {
    code: "DIYbAU2JmQd",
    title: "ジュジャーロへの敬意",
    dateLabel: "2025年4月13日",
    description:
      "幕張メッセの『AUTOMOBILE COUNCIL 2025』でジョルジェット・ジュジャーロ氏に会った記録。牧田作品と深い関わりのあるデザインへの敬意が語られています。",
    quote: "「ご本人の姿を見られて声が聞けて本当に嬉しかったです。」",
    image: "/instagram/DIYbAU2JmQd.jpg",
    alt: "イベント会場で撮影されたアルファロメオ ブレラの写真",
    link: "https://www.instagram.com/p/DIYbAU2JmQd/",
  },
];


const galleryWorks = [
  {
    name: "Monterey Historic 2000 Maserati 250F",
    description:
      "2000年の Monterey Historic Automobile Races を記念した木版画。ファンジオが駆った Maserati 250F の軌跡を、夕景とともに重ね刷りで表現しています。",
    image: "/instagram/CiVECopp8eF.jpg",
    link: "https://www.instagram.com/p/CiVECopp8eF/",
    alt: "Monterey Historic の木版画に描かれた Maserati 250F",
  },
  {
    name: "倉敷 AUTO-ART FESTIVAL ポスター原画",
    description:
      "瀬戸大橋開通を祝した1988年倉敷 AUTO-ART FESTIVAL のポスター原画。車内越しに広がる多彩なヒストリックカーと瀬戸大橋を、鮮烈な構図で切り取った一枚です。",
    image: "/instagram/ChSNCCmp0vx.jpg",
    link: "https://www.instagram.com/p/ChSNCCmp0vx/",
    alt: "倉敷AUTO-ART FESTIVALポスター原画の木版画作品",
  },
  {
    name: "Rally Monte Carlo Alpine A110",
    description:
      "モンテカルロ・ラリーで戦った Alpine Renault A110 をテーマにした木版画。資料が限られる中でも、雪面とボディのコントラストを大胆な色面で再現しています。",
    image: "/instagram/Cg8MIqJpWD1.jpg",
    link: "https://www.instagram.com/p/Cg8MIqJpWD1/",
    alt: "モンテカルロ・ラリーのAlpine A110木版画",
  },
  {
    name: "Le Mans 1930 Bentley Blower",
    description:
      "ル・マン1930年を舞台にした Bentley 4½ Litre Blower の木版画。英国旗を彫り込んだ版木とともに展示された、牧田哲明ならではの重厚なレースシーンです。",
    image: "/instagram/CgrnbRvJ7LO.jpg",
    link: "https://www.instagram.com/p/CgrnbRvJ7LO/",
    alt: "Bentley Blowerの木版画作品",
  },
];



const links = [
  {
    label: "牧田哲明木版画（WESファンクラブ 内 特集）",
    href: "https://bccweb.bai.ne.jp/wesfanclub/right/hanga/makita/m1.htm",
  },
  {
    label: "Instagram @tetsuaki_makita",
    href: "https://www.instagram.com/tetsuaki_makita/",
  },
  {
    label: "Instagram投稿『自宅展示で受け継ぐ情熱』（2025年4月6日）",
    href: "https://www.instagram.com/p/DIFt85lJDFw/",
  },
  {
    label: "Instagram投稿『ヴィンテージフェスで出会った新たな一枚』（2025年5月19日）",
    href: "https://www.instagram.com/p/DJ2eP7tTvL2/",
  },
  {
    label: "Instagram投稿『誕生日に振り返る木版画制作の思い』（2025年9月3日）",
    href: "https://www.instagram.com/p/DOICUankr7i/",
  },
  {
    label: "Instagram投稿『ジュジャーロへの敬意』（2025年4月13日）",
    href: "https://www.instagram.com/p/DIYbAU2JmQd/",
  },
];

type RevealDirection = "left" | "right";

function ScrollReveal({
  children,
  direction,
}: {
  children: ReactNode;
  direction: RevealDirection;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${direction === "left" ? "reveal-left" : "reveal-right"}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/instagram/DF31SBuhCQ1.jpg"
            alt="トヨタ博物館に展示されたアルファロメオ 6C 1750 Gran Sport"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/75 to-slate-950" />
        <div className="relative px-6 py-24 sm:px-12 lg:px-20">
          <div className="mx-auto flex max-w-4xl flex-col gap-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Automotive Woodblock Printmaker</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              牧田哲明<span className="text-cyan-300">（1935 – 2022）</span>
            </h1>
            <p className="max-w-2xl text-lg text-slate-200">
              ヒストリックカーを木版画で描き続けた版画家。モントレーからミッレミリア、国内外のイベントを通してスピードと風景、文化への敬意を版木に刻みました。2025年にはトヨタ博物館で木版画のモデルとなった Alfa Romeo 6C 1750 と再会し、作品と実車を見比べる記録も残しています。
              最新の Instagram アーカイブでは、家族が作品と共に残した視点を共有しています。
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
                href="#gallery"
              >
                代表作をめぐる
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-slate-400/60 px-8 py-3 text-sm font-semibold text-slate-50 transition hover:border-cyan-300 hover:text-cyan-200"
                href="#instagram"
              >
                Instagram アーカイブ
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative px-6 pb-24 sm:px-12 lg:px-20">
        <section className="mx-auto max-w-5xl border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">作品づくりの特徴</h2>
          <p className="mt-4 text-slate-200">
            手作業で彫りと摺りを重ね、車体の曲線やエンジンの鼓動まで伝わるような質感を追求。版木の重ね刷りがスピード感と光の表情を生み出します。Instagram の最新投稿では、その感性を受け継ぐ家族の視点から制作背景を読み解くことができます。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-slate-900/40"
              >
                <h3 className="text-xl font-medium text-cyan-200">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="mx-auto mt-24 max-w-5xl space-y-16">
          <h2 className="text-2xl font-semibold sm:text-3xl text-cyan-100">木版画で巡るヒストリックカー</h2>
          {galleryWorks.map((work, index) => (
            <ScrollReveal
              key={work.name}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <article
                className={`flex flex-col-reverse gap-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-xl shadow-slate-950/40 lg:flex-row lg:items-center lg:gap-12 ${
                  index % 2 === 0 ? "" : "lg:flex-row-reverse"
                }`}
              >
                <div className="flex-1 space-y-4 px-6 pb-6 pt-0 sm:px-10 lg:py-8">
                  <h3 className="text-2xl font-semibold text-cyan-100">{work.name}</h3>
                  <p className="text-sm text-slate-200">{work.description}</p>
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 underline decoration-dotted underline-offset-4 transition hover:text-cyan-100"
                    href={work.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagramで詳しく見る
                  </a>
                </div>
                <div className="relative h-64 w-full flex-1 sm:h-80">
                  <Image
                    src={work.image}
                    alt={work.alt ?? `${work.name} の木版画を写した写真`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </section>

        <section id="timeline" className="mx-auto mt-24 max-w-5xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">主な歩み</h2>
          <div className="mt-8 space-y-6 border-l border-cyan-400/50 pl-6">
            {timeline.map((entry) => (
              <div key={entry.period} className="relative">
                <span className="absolute -left-8 top-1.5 h-3 w-3 rounded-full bg-cyan-300" />
                <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">{entry.period}</p>
                <h3 className="mt-2 text-xl font-medium text-slate-50">{entry.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{entry.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="works" className="mx-auto mt-24 max-w-5xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">代表的な作品・シリーズ</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {works.map((work) => (
              <div key={work.name} className="rounded-2xl bg-slate-800/80 p-6 shadow-inner">
                <h3 className="text-lg font-medium text-cyan-100">{work.name}</h3>
                <p className="mt-3 text-sm text-slate-200">{work.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="instagram"
          className="mx-auto mt-24 max-w-5xl rounded-3xl border border-cyan-500/40 bg-cyan-500/10 p-10"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl text-cyan-100">Instagram アーカイブから</h2>
          <p className="mt-6 text-sm text-slate-100 sm:text-base">
            アカウント <span className="font-semibold text-cyan-200">@tetsuaki_makita</span> では、家族が作品と共に過ごした日常やイベントの記録を発信しています。以下の投稿は、木版画家としての視点だけでなく、牧田家がどのように遺産を守り伝えているかを示す貴重な一次情報です。
          </p>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {instagramHighlights.map((post) => (
              <article
                key={post.code}
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-lg shadow-slate-900/40"
              >
                <div className="relative h-56 sm:h-64">
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4 p-6 sm:p-8">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">{post.dateLabel}</p>
                  <h3 className="text-xl font-semibold text-slate-50">{post.title}</h3>
                  <p className="text-sm text-slate-200">{post.description}</p>
                  <blockquote className="border-l-2 border-cyan-300/60 pl-4 text-sm italic text-cyan-100">
                    {post.quote}
                  </blockquote>
                  <div>
                    <a
                      className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 underline decoration-dotted underline-offset-4 transition hover:text-cyan-100"
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagramで投稿を見る
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-300">
            ※ Instagram の投稿内容・画像は 2025年4月〜9月の公開情報をもとに引用しています。
          </p>
        </section>

        <section className="mx-auto mt-24 max-w-4xl rounded-3xl border border-cyan-500/40 bg-cyan-500/10 p-10">
          <h2 className="text-2xl font-semibold sm:text-3xl text-cyan-100">制作背景とこだわり</h2>
          <p className="mt-6 text-sm text-slate-100 sm:text-base">
            「本当に版画の良さを理解している人、題材と深く関係する人からの依頼だけを受ける」と語り、企業案件でも妥協しない制作姿勢を保ちました。モデルや資料の綿密な収集と、音楽家ウェス・モンゴメリーから受けたインスピレーションを制作時のリズムに重ねていたと言われています。
          </p>
        </section>

        <section className="mx-auto mt-24 max-w-4xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">関連リンク</h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-200">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  className="text-cyan-300 underline decoration-dotted underline-offset-4 transition hover:text-cyan-200"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-400">
            ※ 経歴・インタビューの引用は WESファンクラブ内「牧田哲明木版画」特集記事、および Instagram @tetsuaki_makita の公開投稿を参照しています。
          </p>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/60 px-6 py-10 text-center text-sm text-slate-400 sm:px-12">
        <p>
          © {new Date().getFullYear()} Tribute to Tetsuaki Makita. Information curated for fans of automotive woodblock prints.
        </p>
      </footer>
    </div>
  );
}
