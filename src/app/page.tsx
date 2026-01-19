"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

const highlights = [
  {
    title: "アルファロメオとイタリアンレースへの偏愛",
    description:
      "若い頃からアルファロメオに魅了され、ミッレミリアやタルガ・フローリオなど1920〜50年代のイタリアレースを中心に木版画化。タツィオ・ヌヴォラーリといった名レーサーも題材にしています。",
  },
  {
    title: "木版画ならではの質感",
    description:
      "複数の版木を僅かな色差で刷り重ね、白黒写真のようなノスタルジックさと臨場感を演出。和紙と墨の濃淡でクラシックカーへの愛情を表現しています。",
  },
  {
    title: "自動車芸術コミュニティでの活動",
    description:
      "日本自動車アーティスト協会（JAAA）の創立メンバーとして長年活動。1993〜2009年にはモントレー・ヒストリック・オートモービル・レースの公式マスターアーティストとして記念版画を制作しました。",
  },
];

const timeline = [
  {
    period: "1935年10月4日",
    title: "愛知県豊橋市に生まれる",
    detail: "戦前生まれの木版画家・自動車画家として、のちにクラシックカーの木版画で国内外に名を知られる。",
  },
  {
    period: "学生時代",
    title: "美術部で写実画に取り組む",
    detail:
      "豊橋市立豊城中学校から愛知県立時習館高等学校へ進学し美術部に所属。野田弘志らと写実画に取り組んだ。",
  },
  {
    period: "大学卒業後",
    title: "商社勤務を経て独立",
    detail:
      "大阪・東京の商社勤務後に豊橋へ戻り、地元デザイン会社で勤務。独立して自動車画家・版画家としての活動を開始した。",
  },
  {
    period: "1983〜1984年",
    title: "三菱自動車モータースポーツカレンダーを制作",
    detail:
      "海外向けモータースポーツカレンダー（ラリーアート）の原画を担当し、パリダカール・ラリーの情景を描いた。",
  },
  {
    period: "1986〜1988年",
    title: "瀬戸大橋ヒストリックカーフェスティバルのポスターを制作",
    detail:
      "倉敷で開催された旧車イベントのポスター原画を担当し、ヒストリックカー文化の象徴的な作品群となった。",
  },
  {
    period: "1993〜2009年",
    title: "モントレーの公式記念版画を制作",
    detail:
      "Monterey Historic Automobile Races の公式アーティストとして毎年記念木版画を制作。日本人初の公式マスターアーティストに選出された。",
  },
  {
    period: "2001〜2002年",
    title: "ムゼオ・アルファロメオ展で個展を開催",
    detail:
      "パシフィコ横浜の「ムゼオ・アルファロメオ展」で54点を展示し、翌年は横浜高島屋のイタリアフェアで版画とミニカーの展示会を行った。",
  },
  {
    period: "2019年",
    title: "豊橋駅前で個展を開催",
    detail:
      "84歳の誕生日を記念し、次女の塚越京子の企画で中部ガス名豊ギャラリーにて個展「牧田哲明作品展2019」を開催。",
  },
  {
    period: "2022年11月23日",
    title: "永眠",
    detail: "享年88。木版画でクラシックカーとモータースポーツの歴史を語り継いだ足跡は今も愛されている。",
  },
];

const works = [
  {
    name: "Mille Miglia 1947 The Winner, Alfa Romeo 8C 2900B (2004)",
    detail:
      "1947年ミッレミリア優勝車を雨中の疾走で描いた代表作。クラシックレースの情景を木版画で表現しています。",
  },
  {
    name: "Monterey Historic Automobile Races Commemorative Prints (1993–2009)",
    detail:
      "米国モントレーの名門イベントで17年間制作された公式記念木版画シリーズ。各年のテーマ車両やレース情景を描いたライフワーク。",
  },
  {
    name: "三菱自動車 モータースポーツカレンダー (1983–1984)",
    detail:
      "海外向けラリーアートカレンダーの原画を担当。パリダカール・ラリーで戦うパジェロなどを力強く描いた。",
  },
  {
    name: "瀬戸大橋ヒストリックカーフェスティバル ポスター (1986–1988)",
    detail:
      "倉敷で開催された旧車イベントのポスター原画。ヒストリックカー文化を象徴する作品群として知られる。",
  },
];

const instagramHighlights = [
  {
    code: "DF31SBuhCQ1",
    title: "6C 1750 Gran Sport に再会",
    dateLabel: "2025年2月9日",
    description:
      "木版画の題材となった Alfa Romeo 6C 1750 をトヨタ博物館で再訪。作品と実車を重ねながら当時の資料を振り返るフィールドレポートです。",
    image: "/instagram/DF31SBuhCQ1.jpg",
    alt: "トヨタ博物館で展示されるアルファロメオ 6C 1750 の木版画と実車",
    link: "https://www.instagram.com/p/DF31SBuhCQ1/",
  },
  {
    code: "DJ2eP7tTvL2",
    title: "コレクションに加わったアルファロメオ版画",
    dateLabel: "2025年5月19日",
    description:
      "ビンテージフェスティバルで見つけたアルファロメオの木版画をコレクションへ迎えたエピソード。作品の保存方法や背景も詳しく触れています。",
    image: "/instagram/DJ2eP7tTvL2.jpg",
    alt: "アルファロメオの木版画を手に収める様子",
    link: "https://www.instagram.com/p/DJ2eP7tTvL2/",
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
    label: "Wikipedia: 牧田哲明",
    href: "https://ja.wikipedia.org/wiki/%E7%89%A7%E7%94%B0%E5%93%B2%E6%98%8E",
  },
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

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      element.classList.add("reveal-visible");
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target as Element);
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
              愛知県豊橋市生まれの木版画家・自動車画家。ミッレミリアやタルガ・フローリオなど1920〜50年代のイタリア車レースを中心に、クラシックカーの情景を木版画で表現しました。
              1993〜2009年にはモントレー・ヒストリック・オートモービル・レースの公式マスターアーティストとして記念版画を制作。近年は次女の塚越京子がSNSで作品や制作過程のアーカイブを公開しています。
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-cyan-200">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-4 py-2 transition hover:border-cyan-200 hover:text-cyan-100"
                href="https://www.instagram.com/tetsuaki_makita/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-4 py-2 transition hover:border-cyan-200 hover:text-cyan-100"
                href="https://x.com/tetsuaki_makita"
                target="_blank"
                rel="noopener noreferrer"
              >
                X (旧Twitter)
              </a>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-4 py-2 transition hover:border-cyan-200 hover:text-cyan-100"
                href="https://www.facebook.com/tetsuaki104makita"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4">
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
        <section id="gallery" className="mx-auto mt-20 max-w-5xl space-y-10">
          <h2 className="text-2xl font-semibold sm:text-3xl text-cyan-100">木版画で巡るヒストリックカー</h2>
          {galleryWorks.map((work, index) => (
            <ScrollReveal
              key={work.name}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <article
                className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/65 shadow-lg shadow-slate-950/40 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className="relative h-64 w-full sm:h-80 lg:flex-1 lg:min-h-[22rem]">
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-3 px-6 py-6 sm:px-10 lg:flex-1 lg:py-8">
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
              </article>
            </ScrollReveal>
          ))}
        </section>

        <section id="timeline" className="mx-auto mt-20 max-w-5xl">
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


        <section className="mx-auto mt-20 max-w-5xl border border-white/15 bg-white/5 p-8 backdrop-blur sm:p-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">作品づくりの特徴</h2>
          <p className="mt-4 text-slate-200">
            複数の版木を使った重ね刷りと僅かな色調で、白黒写真のようなノスタルジックな雰囲気を表現。精緻な描写と大胆な構図、和紙と墨の濃淡が生む質感でクラシックカーへの情熱を伝えます。
            木版画以外にも墨絵・鉛筆画・油彩で自動車を描き、作品は自動車雑誌『カーグラフィック』などにも掲載されました。
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/15 bg-slate-900/80 p-6 shadow"
              >
                <h3 className="text-xl font-medium text-cyan-200">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="works" className="mx-auto mt-20 max-w-5xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">代表的な作品・シリーズ</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {works.map((work) => (
              <div key={work.name} className="rounded-xl bg-slate-800/80 p-6 shadow-inner">
                <h3 className="text-lg font-medium text-cyan-100">{work.name}</h3>
                <p className="mt-3 text-sm text-slate-200">{work.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="instagram"
          className="mx-auto mt-24 max-w-5xl rounded-2xl border border-white/10 bg-slate-900/65 p-8"
        >
          <h2 className="text-2xl font-semibold sm:text-3xl text-cyan-100">Instagram アーカイブから</h2>
          <p className="mt-6 text-sm text-slate-100 sm:text-base">
            アカウント <span className="font-semibold text-cyan-200">@tetsuaki_makita</span> では、家族が作品と共に過ごした日常やイベントの記録を発信しています。投稿をたどると、木版画と共に歩んだ家族の記録を断片的に辿れます。
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {instagramHighlights.map((post) => (
              <article
                key={post.code}
                className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 shadow-md"
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
                <div className="space-y-3 p-6">
                  <h3 className="text-xl font-semibold text-slate-50">{post.title}</h3>
                  <p className="text-sm text-slate-200">{post.description}</p>
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
            ※ Instagram の投稿内容・画像は公開時点の情報をもとに引用しています。
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
            ※ 経歴情報は Wikipedia「牧田哲明」および WESファンクラブ内「牧田哲明木版画」特集記事、Instagram @tetsuaki_makita の公開投稿を参照しています。
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
