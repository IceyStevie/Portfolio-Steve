<template>
  <section class="wrap hero">
    <div class="hero__text">
      <div class="hero__status">
        <span class="hero__dot" aria-hidden="true"></span>
        <span>{{ data.status }}</span>
      </div>
      <h1 class="hero__title">{{ data.headline }}</h1>
      <p class="hero__lead">{{ data.ringkasan }}</p>
      <div class="hero__cta">
        <a class="btn btn--primary" href="#proyek" @click.prevent="goTo('proyek')">Lihat proyek</a>
        <a class="btn" href="#kontak" @click.prevent="goTo('kontak')">Hubungi saya</a>
      </div>
    </div>

    <div class="hero__code">
      <div class="hero__file">profil.json</div>
      <pre>{{ json }}</pre>
    </div>
  </section>
</template>

<script setup>
import data from 'src/data/portfolio'

const json = JSON.stringify(data.profilJson, null, 2)

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 48px;
  padding-top: 72px;
  padding-bottom: 80px;
}

.hero__text {
  flex: 1 1 460px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.hero__status {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--muted);
}

.hero__dot {
  flex: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
}

.hero__title {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 56px;
  line-height: 1.06;
  letter-spacing: -0.025em;
  text-wrap: balance;
}

.hero__lead {
  margin: 0;
  max-width: 56ch;
  font-size: 18px;
  color: #3a4557;
}

.hero__cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero__code {
  flex: 1 1 340px;
  min-width: 0;
  padding: 24px;
  border-radius: 6px;
  background: #0d1624;
  color: #dce4f7;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  line-height: 1.8;
  overflow-x: auto;

  pre {
    margin: 0;
    font: inherit;
  }
}

.hero__file {
  margin-bottom: 8px;
  color: #7f8da6;
}

@media (max-width: 600px) {
  .hero__title {
    font-size: 38px;
  }
}
</style>
