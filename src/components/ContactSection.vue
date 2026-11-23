<template>
  <section id="kontak" class="wrap contact">
    <div class="contact__intro">
      <div class="eyebrow">Kontak</div>
      <h2 class="h2">Punya posisi yang cocok? Kirim kabar, saya balas dalam satu hari kerja.</h2>
    </div>

    <div class="contact__rows">
      <div v-for="k in data.kontak" :key="k.label" class="row">
        <div class="row__label">{{ k.label }}</div>
        <div class="row__value">{{ k.nilai }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from 'src/data/portfolio'
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 48px;
  padding-top: 72px;
  padding-bottom: 96px;
}

.contact__intro {
  flex: 1 1 400px;
  min-width: 0;
}

.contact__rows {
  flex: 1 1 400px;
  min-width: 0;
  border-top: 1px solid var(--line);
}

.row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 24px;
  padding: 16px 0;
  border-bottom: 1px solid var(--line);
}

.row__label {
  width: 100px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--muted);
}

.row__value {
  flex: 1 1 200px;
  min-width: 0;
  font-weight: 500;
  overflow-wrap: anywhere;
}
</style>
