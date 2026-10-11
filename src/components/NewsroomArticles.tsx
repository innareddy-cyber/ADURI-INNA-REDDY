import React, { useState } from 'react';
import { Newspaper, AlertTriangle, Clock, ArrowRight, Tag, Bookmark, Share2 } from 'lucide-react';
import { NEWS_ARTICLES, NewsArticle } from '../data/platformData';

interface NewsroomArticlesProps {
  searchQuery: string;
}

export const NewsroomArticles: React.FC<NewsroomArticlesProps> = ({ searchQuery }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const tags = ['All', 'Digital Arrest', 'Deepfakes', '1930', 'Voice SOS', 'POCSO'];

  const filteredArticles = NEWS_ARTICLES.filter(art => {
    const matchesSearch =
      !searchQuery ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag =
      selectedTag === 'All' || art.tags.some(t => t.toLowerCase().includes(selectedTag.toLowerCase()));

    return matchesSearch && matchesTag;
  });

  const handleShare = (id: string) => {
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-[#252a39]">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#4cd7f6] uppercase tracking-wider mb-2">
            <Newspaper className="w-4 h-4" />
            <span>CYBERCRIMENEWS.NET • INVESTIGATIVE DESK</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl text-white font-bold tracking-tight">
            Threat Intelligence & Newsroom Reports
          </h1>
          <p className="text-sm text-[#bcc9cd] mt-1 max-w-2xl">
            In-depth journalistic investigations, cyber syndicate exposés, and sovereign defense bulletins led by Chief Editor Aduri Inna Reddy.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-1.5">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-[#06b6d4] text-[#003640] font-bold shadow'
                  : 'bg-[#1a1f2e] text-[#bcc9cd] hover:text-white hover:bg-[#252a39]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Featured / Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map(article => (
          <article
            key={article.id}
            className="rounded-2xl bg-[#1a1f2e] border border-[#303444] p-6 shadow-xl flex flex-col justify-between hover:border-[#4cd7f6]/40 transition-colors"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#252a39] text-[#4cd7f6] font-semibold">
                  {article.category}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                    article.severity === 'Critical'
                      ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                      : article.severity === 'High'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-[#4cd7f6]/20 text-[#4cd7f6] border border-[#4cd7f6]/30'
                  }`}
                >
                  {article.severity} Threat
                </span>
              </div>

              <h2 className="font-headline text-lg sm:text-xl text-white font-bold hover:text-[#4cd7f6] transition-colors leading-snug">
                {article.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#bcc9cd] leading-relaxed">
                {article.summary}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {article.tags.map(t => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-[#090e1c] text-[#869397]"
                  >
                    <Tag className="w-2.5 h-2.5" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-5 mt-5 border-t border-[#252a39] flex items-center justify-between text-xs text-[#bcc9cd]">
              <div className="flex flex-col">
                <span className="text-white font-medium">{article.author}</span>
                <span className="text-[11px] text-[#869397] font-mono">
                  {article.date} • {article.readTime}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(article.id)}
                  className="p-2 rounded-lg bg-[#252a39] hover:bg-[#303444] text-[#bcc9cd] hover:text-white transition-colors text-xs flex items-center gap-1"
                  title="Share Report"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedId === article.id ? 'Copied Link' : 'Share'}</span>
                </button>
              </div>
            </div>
          </article>
        ))}

        {filteredArticles.length === 0 && (
          <div className="col-span-2 p-12 text-center bg-[#1a1f2e] rounded-2xl border border-[#303444] text-[#bcc9cd]">
            <p className="text-base font-semibold text-white">No articles found matching "{searchQuery}".</p>
            <p className="text-xs mt-1">Try searching for keywords like "Digital Arrest", "1930", "Deepfakes", or "Voice SOS".</p>
          </div>
        )}
      </div>
    </div>
  );
};
