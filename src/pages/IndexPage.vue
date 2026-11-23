<template>
  <q-page>
    <header class="nav">
      <div class="wrap nav__inner">
        <div class="nav__brand">{{ data.nama }}</div>
       <nav class="nav__links" aria-label="Navigasi utama">
        <a href="#proyek" @click.prevent="goTo('proyek')">Proyek</a>
        <a href="#keahlian" @click.prevent="goTo('keahlian')">Keahlian</a>
        <a href="#riwayat" @click.prevent="goTo('riwayat')">Riwayat</a>
        <a href="#kontak" @click.prevent="goTo('kontak')">Kontak</a>
      </nav>
      </div>
    </header>

    <HeroSection />
    <ProjectsSection />
    <SkillsSection />
    <HistorySection />
    <ContactSection />
  </q-page>
</template>

<script setup>
import data from 'src/data/portfolio'
import HeroSection from 'components/HeroSection.vue'
import ProjectsSection from 'components/ProjectsSection.vue'
import SkillsSection from 'components/SkillsSection.vue'
import HistorySection from 'components/HistorySection.vue'
import ContactSection from 'components/ContactSection.vue'

function goTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style lang="scss" scoped>
.nav {
  border-bottom: 1px solid var(--line);
}

.nav__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  padding-top: 16px;
  padding-bottom: 16px;
}

.nav__brand {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: -0.01em;
}

.nav__links {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 24px;
  font-size: 15px;
  font-weight: 500;

  a {
    display: flex;
    align-items: center;
    min-height: 44px;
    color: var(--ink);
    text-decoration: none;

    &:hover {
      color: var(--accent);
    }
  }
}
</style>
