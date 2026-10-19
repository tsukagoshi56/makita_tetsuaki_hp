"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

const prologueFacts = [
  {
    label: "出生",
    value: "1935年10月4日 / 愛知県豊橋市",
  },
  {
    label: "逝去",
    value: "2022年11月23日（享年88）",
  },
  {
    label: "肩書",
    value: "木版画家・自動車画家",
  },
  {
    label: "主題",
    value: "ミッレミリア／タルガ・フローリオ／クラシックカー",
  },
  {
    label: "代表的活動",
    value: "Monterey Historic Automobile Races 公式記念版画（1993-2009）",
  },
  {
    label: "所属",
    value: "日本自動車アーティスト協会（JAAA）創立メンバー",
  },
];

const chapters = [
  {
    chapter: "Chapter 01",
    period: "1935.10.04",
    title: "豊橋に生まれる",
    detail: "愛知県豊橋市に生まれる。",
  },
  {
    chapter: "Chapter 02",
    period: "学生時代",
    title: "美術部で写実画に取り組む",
    detail:
      "豊橋市立豊城中学校から愛知県立時習館高等学校へ進学し、美術部で野田弘志らと活動。",
  },
  {
    chapter: "Chapter 03",
    period: "大学卒業後",
    title: "商社勤務とデザイン会社を経て独立",
    detail:
      "愛知大学卒業後、大阪・東京の商社勤務を経て豊橋のデザイン会社に勤務。のちに独立し自動車画家・版画家として活動を開始。",
  },
  {
    chapter: "Chapter 04",
    period: "1980-1985",
    title: "近美展に連続出品",
    detail:
      "東京都美術館で開催された「近美展」に毎年100号サイズの油彩画を出品。",
  },
  {
    chapter: "Chapter 05",
    period: "1983-1984",
    title: "三菱自動車モータースポーツカレンダー",
    detail:
      "海外向けラリーアートカレンダーの原画を制作し、パリダカール・ラリーの情景を描いた。",
  },
  {
    chapter: "Chapter 06",
    period: "1986-1988",
    title: "瀬戸大橋ヒストリックカーフェスティバル",
    detail: "倉敷で開催された旧車イベントのポスター原画を担当。",
  },
  {
    chapter: "Chapter 07",
    period: "1993-2009",
    title: "Monterey Historic Automobile Races 公式版画",
    detail:
      "公式マスターアーティストとして毎年記念木版画を制作し、日本人初の公式マスターアーティストに選出された。",
  },
  {
    chapter: "Chapter 08",
    period: "2001-2002",
    title: "ムゼオ・アルファロメオ展で個展",
    detail:
      "パシフィコ横浜で54点を展示し、翌年は横浜高島屋のイタリアフェアで版画とミニカーを展示。",
  },
  {
    chapter: "Chapter 09",
    period: "2019",
    title: "豊橋駅前で個展を開催",
    detail:
      "次女・京子の企画で中部ガス名豊ギャラリーにて「牧田哲明作品展2019」を開催。",
  },
  {
    chapter: "Chapter 10",
    period: "2022.11.23",
    title: "永眠",
    detail: "享年88。",
  },
];

const exhibitGallery = [
  {
    room: "展示室 01 / Monterey",
    name: "Monterey Historic 2000 Maserati 250F",
    description:
      "2000年のMonterey Historic Automobile Racesを記念した木版画。夕景の空気とともにファンジオの足跡を重ねる一枚。",
    image: "/instagram/CiVECopp8eF.jpg",
    link: "https://www.instagram.com/p/CiVECopp8eF/",
    alt: "Monterey Historic の木版画に描かれた Maserati 250F",
  },
  {
    room: "展示室 02 / Kurashiki",
    name: "倉敷 AUTO-ART FESTIVAL ポスター原画",
    description:
      "瀬戸大橋開通を祝した倉敷の公式ポスター原画。車内越しに広がるクラシックカーの群像をフィルムのワンシーンのように切り取る。",
    image: "/instagram/ChSNCCmp0vx.jpg",
    link: "https://www.instagram.com/p/ChSNCCmp0vx/",
    alt: "倉敷AUTO-ART FESTIVALポスター原画の木版画作品",
  },
  {
    room: "展示室 03 / Rally",
    name: "Rally Monte Carlo Alpine A110",
    description:
      "雪面と車体のコントラストを大胆な色面で表現した一枚。限られた資料の中でレースの緊張感を立ち上げている。",
    image: "/instagram/Cg8MIqJpWD1.jpg",
    link: "https://www.instagram.com/p/Cg8MIqJpWD1/",
    alt: "モンテカルロ・ラリーのAlpine A110木版画",
  },
  {
    room: "展示室 04 / Le Mans",
    name: "Le Mans 1930 Bentley Blower",
    description:
      "英国旗を彫り込んだ版木とともに展示された重厚なレースシーン。1920〜30年代の空気を濃密に描き出す。",
    image: "/instagram/CgrnbRvJ7LO.jpg",
    link: "https://www.instagram.com/p/CgrnbRvJ7LO/",
    alt: "Bentley Blowerの木版画作品",
  },
];

const signatureWorks = [
  {
    name: "Mille Miglia 1947 The Winner, Alfa Romeo 8C 2900B (2004)",
    detail:
      "1947年ミッレミリア優勝車を雨中の疾走で描いた代表作。クラシックレースを木版画で表現した象徴的な一枚。",
  },
  {
    name: "Monterey Historic Automobile Races Commemorative Prints (1993-2009)",
    detail:
      "米国モントレーの公式記念木版画シリーズ。各年のテーマ車両やレース情景を描いたライフワーク。",
  },
  {
    name: "三菱自動車モータースポーツカレンダー (1983-1984)",
    detail:
      "海外向けラリーアートカレンダーの原画を担当。パリダカール・ラリーを戦うパジェロなどを力強く描いた。",
  },
  {
    name: "瀬戸大橋ヒストリックカーフェスティバル ポスター原画 (1986-1988)",
    detail:
      "倉敷で開催された旧車イベントの公式ポスター原画。瀬戸大橋とクラシックカーの群像を鮮烈に切り取る。",
  },
];

const craftNotes = [
  {
    title: "アルファロメオとイタリアンレース",
    description:
      "若い頃からアルファロメオに魅了され、ミッレミリアやタルガ・フローリオなど1920〜50年代のイタリアレースを木版画化。タツィオ・ヌヴォラーリら名レーサーも題材にしている。",
  },
  {
    title: "多版摺りが生むノスタルジア",
    description:
      "複数の版木を僅かな色差で刷り重ね、白黒写真のような空気感と臨場感を実現。和紙と墨の濃淡でクラシックカーへの愛情を描き出した。",
  },
  {
    title: "木版画を超えた表現",
    description:
      "墨絵や鉛筆画、油彩でも自動車を描き、その作品は自動車雑誌『カーグラフィック』などにも掲載された。",
  },
];

const collections = [
  {
    title: "三菱オートギャラリー",
    detail:
      "パジェロの木版画作品が実車と共に展示された記録があり、車両とアートを一体で鑑賞できる場となった。",
  },
  {
    title: "トヨタ博物館",
    detail:
      "アルファロメオ・シリーズが企画展で紹介され、名車模型と併せて展示された。",
  },
  {
    title: "長久手アートフェスティバル 2024",
    detail:
      "トヨタ博物館会場で『ミッレミリア1947年優勝車』を含む作品が展示紹介された。",
  },
];

const archiveHighlights = [
  {
    code: "DF31SBuhCQ1",
    title: "6C 1750 Gran Sport に再会",
    dateLabel: "2025年2月9日",
    description:
      "木版画の題材となった Alfa Romeo 6C 1750 をトヨタ博物館で再訪。作品と実車を重ねながら当時の資料を振り返るフィールドレポート。",
    image: "/instagram/DF31SBuhCQ1.jpg",
    alt: "トヨタ博物館で展示されるアルファロメオ 6C 1750 の木版画と実車",
    link: "https://www.instagram.com/p/DF31SBuhCQ1/",
  },
  {
    code: "DJ2eP7tTvL2",
    title: "コレクションに加わったアルファロメオ版画",
    dateLabel: "2025年5月19日",
    description:
      "ヴィンテージフェスティバルで見つけたアルファロメオの木版画をコレクションへ迎えたエピソード。作品の保存方法や背景も詳しく触れている。",
    image: "/instagram/DJ2eP7tTvL2.jpg",
    alt: "アルファロメオの木版画を手に収める様子",
    link: "https://www.instagram.com/p/DJ2eP7tTvL2/",
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
    label: "X (旧Twitter) @tetsuaki_makita",
    href: "https://x.com/tetsuaki_makita",
  },
  {
    label: "Facebook 公式ページ",
    href: "https://www.facebook.com/tetsuaki104makita",
  },
];

type RevealDirection = "left" | "right" | "up";

function ScrollReveal({
  children,
  direction,
  className = "",
}: {
  children: ReactNode;
  direction: RevealDirection;
  className?: string;
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
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getDirectionClass = (dir: RevealDirection) => {
    switch (dir) {
      case "left":
        return "reveal-left";
      case "right":
        return "reveal-right";
      case "up":
      default:
        return ""; // base 'reveal' class handles up/fade-in
    }
  };

  return (
    <div
      ref={ref}
      className={`reveal ${getDirectionClass(direction)} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen museum-surface text-[#1f1b16]">
      <div className="relative z-0 bg-black">
        <section className="relative h-screen w-full overflow-hidden bg-black">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/instagram/DF31SBuhCQ1.jpg"
              className="h-full w-full object-contain md:object-cover brightness-[0.7] contrast-[1.1] saturate-[0.8]"
            >
              <source src="/instagram/790565921.026270.mp4" type="video/mp4" />
            </video>
            {/* Overlay Gradient for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            <div className="absolute inset-0 film-grain" />
            <div className="absolute inset-0 vignette" />
          </div>

          {/* Hero Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-20 sm:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="space-y-8">
                  <div>
                    <p
                      className="museum-label text-[#d9b676] opacity-0 animate-[cinematic-fade_1.5s_ease-out_forwards]"
                      style={{ animationDelay: "0.5s" }}
                    >
                      Automotive Woodblock Artist
                    </p>
                    <h1
                      className="mt-4 font-display text-5xl leading-tight sm:text-6xl lg:text-7xl text-[#f6f1e7] opacity-0 animate-[cinematic-rise_1.5s_ease-out_forwards]"
                      style={{ animationDelay: "0.7s" }}
                    >
                      牧田哲明 <span className="block text-2xl text-[#d9b676] sm:inline sm:text-3xl sm:ml-4">1935 — 2022</span>
                    </h1>
                  </div>


                </div>
              </div>
            </div>

            {/* Scroll Indicator - Delayed Appearance */}
            <div
              className="absolute bottom-8 left-0 right-0 flex justify-center opacity-0 animate-[cinematic-fade_2s_ease-in-out_forwards]"
              style={{ animationDelay: "10s" }}
            >
              <div className="flex flex-col items-center gap-2 text-[#d9b676]/60">
                <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
                <div className="h-12 w-px bg-gradient-to-b from-[#d9b676]/60 to-transparent" />
              </div>
            </div>
          </div>
        </section>


        {/* Introduction Section (Restored) */}
        <section className="relative z-10 bg-[#fcfbf9] pt-24 pb-24 text-[#1f1b16]">
          <div className="relative px-6 sm:px-12 lg:px-20">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
                {/* Left Column: Intro Text */}
                <div className="flex flex-col justify-center space-y-8">
                  <div className="cinematic-rise">
                    <p className="text-lg leading-loose tracking-wide text-[#3a3127]">
                      木版画家・自動車画家として、ミッレミリアやタルガ・フローリオなど1920〜50年代のクラシックレースを描き続けた。
                    </p>
                    <p className="mt-8 text-lg leading-loose tracking-wide text-[#3a3127]">
                      1993〜2009年にはMonterey Historic Automobile Racesの公式マスターアーティストとして記念版画を制作し、2022年11月23日に逝去。
                      現在は次女 京子がSNSで作品アーカイブを紹介し、その足跡を伝え続けている。
                    </p>
                  </div>
                </div>

                {/* Right Column: Navigation & SNS */}
                <div className="flex flex-col justify-center space-y-10 border-t border-[#d8c8b2] pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                  <div className="flex flex-wrap gap-4 cinematic-rise" style={{ animationDelay: "0.2s" }}>
                    <a
                      className="inline-flex items-center justify-center rounded-sm border border-[#1f1b16] bg-transparent px-8 py-3 text-sm font-medium text-[#1f1b16] transition hover:bg-[#1f1b16] hover:text-[#fcfbf9]"
                      href="#chapters"
                    >
                      年代記を見る
                    </a>
                    <a
                      className="inline-flex items-center justify-center rounded-sm border border-[#d8c8b2] px-8 py-3 text-sm font-medium text-[#3a3127] transition hover:bg-[#e8decb]/30"
                      href="#gallery"
                    >
                      展示室へ
                    </a>
                    <a
                      className="inline-flex items-center justify-center rounded-sm border border-[#d8c8b2] px-8 py-3 text-sm font-medium text-[#3a3127] transition hover:bg-[#e8decb]/30"
                      href="#archive"
                    >
                      Archives
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center gap-8 text-xs tracking-wider text-[#8c7b6c] cinematic-fade" style={{ animationDelay: "0.3s" }}>
                    <a
                      className="group inline-flex items-center gap-2 transition hover:text-[#d9b676]"
                      href="https://www.instagram.com/tetsuaki_makita/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="h-px w-4 bg-[#d8c8b2] transition group-hover:bg-[#d9b676]"></span>
                      Instagram
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 transition hover:text-[#d9b676]"
                      href="https://x.com/tetsuaki_makita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="h-px w-4 bg-[#d8c8b2] transition group-hover:bg-[#d9b676]"></span>
                      X (Twitter)
                    </a>
                    <a
                      className="group inline-flex items-center gap-2 transition hover:text-[#d9b676]"
                      href="https://www.facebook.com/tetsuaki104makita"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="h-px w-4 bg-[#d8c8b2] transition group-hover:bg-[#d9b676]"></span>
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="relative px-6 pb-24 pt-10 sm:px-12 lg:px-20 bg-[#f6f1e7]">
          <section id="prologue" className="mx-auto mt-8 max-w-6xl">
            <div className="rounded-3xl border border-[#d8c8b2] bg-white/90 p-8 shadow-xl backdrop-blur">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                  <p className="museum-label">Prologue</p>
                  <h2 className="font-display text-3xl text-[#1f1b16]">
                    木版画で辿る自動車史
                  </h2>
                  <p className="text-sm leading-relaxed text-[#3a3127]">
                    牧田哲明は戦前生まれの世代ながら、自動車レースやクラシックカーを題材に
                    独自の木版画作品を制作し、国内外に名を知られた版画家。若い頃から
                    アルファロメオに魅了され、イタリアのクラシックレースに惹かれ続けた。
                  </p>
                  <p className="text-sm leading-relaxed text-[#3a3127]">
                    1993〜2009年にはMonterey Historic Automobile Racesの公式マスターアーティストとして
                    毎年記念版画を制作。2022年11月23日に逝去し、現在は次女の京子がSNSで
                    作品と制作過程のアーカイブを公開している。
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {prologueFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-2xl border border-[#d8c8b2] bg-[#fdfaf4] p-4"
                    >
                      <p className="museum-label text-[#8a6a45]">{fact.label}</p>
                      <p className="mt-2 text-sm font-medium text-[#1f1b16]">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="chapters" className="mx-auto mt-32 max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between px-6 sm:px-0">
              <div>
                <p className="museum-label">Chronicle</p>
                <h2 className="font-display text-4xl text-[#1f1b16] mt-2">年代記</h2>
              </div>
              <p className="max-w-xl text-sm leading-8 text-[#3a3127]">
                学生時代の美術活動から、国際イベントの公式版画制作へ。<br />
                木版画と共に歩んだ、その生涯の足跡を辿る。
              </p>
            </div>

            <div className="relative mt-16 px-4 sm:px-0">
              <div className="grid gap-px bg-[#d8c8b2] border border-[#d8c8b2] sm:grid-cols-2 lg:grid-cols-3 bg-opacity-30">
                {chapters.map((chapter) => (
                  <ScrollReveal
                    key={chapter.title}
                    direction="up"
                    className="h-full"
                  >
                    <div className="group h-full bg-[#fcfbf9] p-8 transition-colors duration-500 hover:bg-white flex flex-col">
                      <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase text-[#8c7b6c]">
                        <span className="font-display text-[#d9b676]">{chapter.chapter}</span>
                        <span className="h-px w-8 bg-[#d8c8b2]"></span>
                        <span className="font-medium text-[#1f1b16]">{chapter.period}</span>
                      </div>

                      <h3 className="mt-6 mb-4 font-display text-xl leading-relaxed text-[#1f1b16] group-hover:text-[#b08d55] transition-colors">
                        {chapter.title}
                      </h3>

                      <p className="mt-auto text-sm leading-7 text-[#5a4d3f] border-t border-[#f0e6d8] pt-4">
                        {chapter.detail}
                      </p>

                      <div className="mt-4 flex justify-end opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <span className="text-[#d9b676]">→</span>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>

          <section id="gallery" className="mx-auto mt-32 max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between px-6 sm:px-0">
              <div>
                <p className="museum-label">Exhibit</p>
                <h2 className="font-display text-4xl text-[#1f1b16] mt-2">展示室</h2>
              </div>
              <p className="max-w-xl text-sm leading-8 text-[#3a3127]">
                版木の重ね刷りで生まれた名場面を、展示室を巡るように鑑賞する。<br />
                作品ごとに時代の空気やレースの緊張感が立ち上がる。
              </p>
            </div>
            <div className="mt-16 grid gap-10 lg:grid-cols-2 px-6 sm:px-0">
              {exhibitGallery.map((work) => (
                <ScrollReveal
                  key={work.name}
                  direction="up"
                >
                  <article className="group relative overflow-hidden rounded-sm bg-white shadow-sm transition-shadow duration-500 hover:shadow-xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={work.image}
                        alt={work.alt}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-[1.03]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                    <div className="p-8">
                      <p className="museum-label text-[#d9b676]">{work.room}</p>
                      <h3 className="mt-3 font-display text-2xl text-[#1f1b16]">
                        {work.name}
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-[#5a4d3f] border-t border-[#f0e6d8] pt-4">
                        {work.description}
                      </p>
                      <div className="mt-6 flex justify-end">
                        <a
                          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#d9b676] transition hover:text-[#b08d55]"
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Work <span className="text-lg leading-none">→</span>
                        </a>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <section id="works" className="mx-auto mt-24 max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="museum-label">Signature Works</p>
                <h2 className="font-display text-3xl text-[#1f1b16]">
                  代表作・シリーズ
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[#3a3127]">
                木版画で切り取られたクラシックレースの記憶。年代ごとに代表作を整理し、
                作品の背景にある物語を浮かび上がらせる。
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {signatureWorks.map((work) => (
                <div
                  key={work.name}
                  className="rounded-2xl border border-[#dbcab4] bg-[#fdfaf4] p-6 shadow-sm"
                >
                  <p className="museum-label text-[#8a6a45]">Signature</p>
                  <h3 className="mt-2 font-display text-xl text-[#1f1b16]">
                    {work.name}
                  </h3>
                  <p className="mt-3 text-sm text-[#3a3127]">{work.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="craft" className="mx-auto mt-24 max-w-6xl">
            <div className="rounded-3xl border border-[#dbcab4] bg-white/90 p-8 shadow-lg">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="museum-label">Craft</p>
                  <h2 className="font-display text-3xl text-[#1f1b16]">
                    作品づくりの特徴
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-relaxed text-[#3a3127]">
                  木版画の技法と資料調査が支える精緻なディテール。モータースポーツへの情熱が
                  画面の隅々にまで息づいている。
                </p>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {craftNotes.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-[#dbcab4] bg-[#fdfaf4] p-6"
                  >
                    <h3 className="font-display text-xl text-[#1f1b16]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#3a3127]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="collections" className="mx-auto mt-24 max-w-6xl">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="museum-label">Collections</p>
                <h2 className="font-display text-3xl text-[#1f1b16]">
                  所蔵・展示の記録
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[#3a3127]">
                作品は自動車関連の展示施設や企画展で紹介され、実車とともに鑑賞される機会も
                作られてきた。
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {collections.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#dbcab4] bg-[#fdfaf4] p-6 shadow-sm"
                >
                  <p className="museum-label text-[#8a6a45]">Collection</p>
                  <h3 className="mt-2 font-display text-xl text-[#1f1b16]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-[#3a3127]">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="archive"
            className="mx-auto mt-24 max-w-6xl rounded-3xl border border-[#182332] bg-[#101c2b] p-8 text-[#f6f1e7] shadow-2xl"
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="museum-label text-[#d9b676]">Archive</p>
                <h2 className="font-display text-3xl text-[#f7efe2]">
                  家族が紡ぐアーカイブ
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-[#e2d4c1]">
                次女・京子によるSNSアーカイブでは、制作過程や展示風景が記録され続けている。
                作品の背景を知るための現代の資料室。
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {archiveHighlights.map((post) => (
                <article
                  key={post.code}
                  className="overflow-hidden rounded-2xl border border-white/10 bg-[#122033] shadow-md"
                >
                  <div className="relative h-56 sm:h-64">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101c2b]/70 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-3 p-6">
                    <p className="museum-label text-[#d9b676]">{post.dateLabel}</p>
                    <h3 className="font-display text-xl text-[#f7efe2]">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#e2d4c1]">{post.description}</p>
                    <div>
                      <a
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#f0d49a] underline decoration-dotted underline-offset-4 transition hover:text-[#f6e5bf]"
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
            <p className="mt-6 text-xs text-[#d7c7af]">
              ※ Instagram の投稿内容・画像は公開時点の情報をもとに引用しています。
            </p>
          </section>

          <section id="links" className="mx-auto mt-24 max-w-5xl">
            <div className="rounded-3xl border border-[#dbcab4] bg-white/90 p-8 shadow-lg">
              <p className="museum-label">References</p>
              <h2 className="font-display text-3xl text-[#1f1b16]">関連リンク</h2>
              <ul className="mt-6 space-y-3 text-sm text-[#3a3127]">
                {links.map((item) => (
                  <li key={item.href}>
                    <a
                      className="text-[#6b4f2c] underline decoration-dotted underline-offset-4 transition hover:text-[#2f2418]"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-[#6b5a47]">
                ※ 経歴情報は Wikipedia「牧田哲明」および WESファンクラブ内「牧田哲明木版画」特集記事、
                Instagram @tetsuaki_makita の公開投稿を参照しています。
              </p>
            </div>
          </section>
        </main>

        <footer className="border-t border-[#d8c8b2]/70 bg-[#f3ecdf] px-6 py-10 text-center text-xs text-[#6b5a47] sm:px-12">
          <p>
            © {new Date().getFullYear()} Tribute to Tetsuaki Makita. A curated
            chronicle of automotive woodblock prints.
          </p>
        </footer>
      </div >
    </div >
  );
}
