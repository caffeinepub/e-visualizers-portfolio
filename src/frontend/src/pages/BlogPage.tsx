import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import {
  BLOG_CATEGORIES,
  BLOG_POSTS,
  type BlogCategory,
  type BlogPost,
  CATEGORY_COLORS,
  CATEGORY_TEXT_COLORS,
} from "@/data/blog-posts";
import { ArrowRight, BookOpen, Calendar, Clock, Star } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const INITIAL_VISIBLE = 6;
const LOAD_MORE_COUNT = 3;

function CategoryBadge({
  category,
}: { category: Exclude<BlogCategory, "All"> }) {
  return (
    <span
      className="text-xs font-semibold font-display uppercase tracking-wider px-3 py-1 rounded-full"
      style={{
        background: CATEGORY_COLORS[category],
        color: CATEGORY_TEXT_COLORS[category],
        border: `1px solid ${CATEGORY_TEXT_COLORS[category]}33`,
      }}
    >
      {category}
    </span>
  );
}

function AuthorAvatar({ initials }: { initials: string }) {
  return (
    <span
      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold font-display text-primary-foreground flex-shrink-0"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
      }}
    >
      {initials}
    </span>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="card-glass shadow-elevated hover-lift rounded-2xl overflow-hidden col-span-full"
      data-ocid="featured-post-card"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image area */}
        <div
          className="relative h-64 lg:h-full min-h-[280px]"
          style={{
            background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/30 select-none">
              <BookOpen className="w-20 h-20 mx-auto mb-3 opacity-40" />
              <p className="text-sm font-display tracking-widest uppercase opacity-50">
                Featured
              </p>
            </div>
          </div>
          {/* FEATURED badge overlay */}
          <div className="absolute top-4 left-4">
            <span
              className="flex items-center gap-1.5 bg-white/90 dark:bg-black/60 text-xs font-bold font-display uppercase tracking-widest px-3 py-1.5 rounded-full shadow"
              style={{ color: "oklch(0.45 0.22 270)" }}
            >
              <Star className="w-3 h-3 fill-current" />
              Featured
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10 flex flex-col justify-center gap-4">
          <CategoryBadge category={post.category} />
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            {post.title}
          </h2>
          <p className="text-muted-foreground leading-relaxed font-body line-clamp-3">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 pt-1">
            <AuthorAvatar initials={post.authorInitials} />
            <div className="min-w-0">
              <p className="text-sm font-semibold font-display text-foreground truncate">
                {post.author}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3 flex-shrink-0" />
                <span>{post.date}</span>
                <span>·</span>
                <Clock className="w-3 h-3 flex-shrink-0" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="mt-2 self-start flex items-center gap-2 font-semibold font-display text-sm transition-smooth group"
            style={{ color: "oklch(0.55 0.22 270)" }}
            data-ocid="featured-read-article-btn"
          >
            Read Article
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.07,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="card-glass shadow-subtle hover-lift rounded-2xl overflow-hidden flex flex-col cursor-pointer"
      data-ocid={`post-card-${post.id}`}
    >
      {/* Thumbnail */}
      <div
        className="h-48 flex-shrink-0 relative"
        style={{
          background: `linear-gradient(135deg, ${post.gradientFrom}, ${post.gradientTo})`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-12 h-12 text-white/25" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        <CategoryBadge category={post.category} />
        <h3 className="font-display text-base font-bold text-foreground leading-snug line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-2 pt-2 border-t border-border/50">
          <AuthorAvatar initials={post.authorInitials} />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold font-display text-foreground truncate">
              {post.author}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{post.date}</span>
              <span>·</span>
              <Clock className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{post.readTime}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 text-xs font-semibold font-display transition-smooth group mt-1"
          style={{ color: "oklch(0.55 0.22 270)" }}
          data-ocid={`post-read-more-${post.id}`}
        >
          Read More
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.article>
  );
}

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [loadingMore, setLoadingMore] = useState(false);

  const filteredPosts =
    activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);
  const visibleRemaining = remainingPosts.slice(0, visibleCount - 1);
  const hasMore = visibleCount - 1 < remainingPosts.length;

  const handleCategoryChange = (cat: BlogCategory) => {
    setActiveCategory(cat);
    setVisibleCount(INITIAL_VISIBLE);
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((v) => v + LOAD_MORE_COUNT);
      setLoadingMore(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="hero-glow absolute inset-0 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 badge-category mb-6"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Our Blog
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Insights & <span className="gradient-text">Articles</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed"
            >
              Stay updated with web design, development, and digital marketing
              insights from our team of experts.
            </motion.p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="pb-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2"
              data-ocid="category-filters"
            >
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => handleCategoryChange(cat)}
                  data-ocid={`filter-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-5 py-2 rounded-full text-sm font-semibold font-display transition-smooth border"
                  style={
                    activeCategory === cat
                      ? {
                          background:
                            "linear-gradient(135deg, oklch(0.55 0.22 270), oklch(0.65 0.28 300))",
                          color: "white",
                          borderColor: "transparent",
                          boxShadow:
                            "0 4px 14px -2px oklch(0.55 0.22 270 / 0.35)",
                        }
                      : {
                          background: "transparent",
                          color: "oklch(var(--muted-foreground))",
                          borderColor: "oklch(var(--border))",
                        }
                  }
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {featuredPost ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Featured Post — full width */}
                <FeaturedCard post={featuredPost} />

                {/* Regular Post Cards */}
                {visibleRemaining.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24" data-ocid="empty-state">
                <BookOpen className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-40" />
                <p className="font-display text-lg font-semibold text-foreground mb-2">
                  No posts yet
                </p>
                <p className="text-muted-foreground text-sm">
                  Check back soon for new content.
                </p>
              </div>
            )}

            {/* Load More */}
            {hasMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-center mt-14"
              >
                <button
                  type="button"
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  data-ocid="load-more-btn"
                  className="flex items-center gap-2 px-8 py-3 rounded-full border font-semibold font-display text-sm transition-smooth hover-lift disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: "transparent",
                    borderColor: "oklch(0.55 0.22 270 / 0.5)",
                    color: "oklch(0.55 0.22 270)",
                  }}
                >
                  {loadingMore ? (
                    <>
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                      Loading...
                    </>
                  ) : (
                    <>
                      Load More Articles
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
