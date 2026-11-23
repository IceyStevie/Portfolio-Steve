<template>
  <section id="riwayat" class="section section--paper">
    <div class="wrap">
      <div class="eyebrow">Riwayat</div>
      <h2 class="h2">Pendidikan dan pengalaman.</h2>

      <div class="cols">
        <div class="col">
          <div class="col__title">Pendidikan</div>
          <div class="item">
            <div class="item__name">{{ data.pendidikan.judul }}</div>
            <div class="item__time">{{ data.pendidikan.periode }}</div>
            <p class="item__text">{{ data.pendidikan.catatan }}</p>
          </div>
        </div>

        <div class="col">
          <div class="col__title">Pengalaman</div>
          <div v-for="e in data.pengalaman" :key="e.judul" class="item">
            <div class="item__name">{{ e.judul }}</div>
            <div class="item__time">{{ e.periode }}</div>
            <ul class="item__list">
              <li v-for="p in e.poin" :key="p">{{ p }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import data from 'src/data/portfolio'
</script>

<style lang="scss" scoped>
.cols {
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  margin-top: 32px;
}

.col {
  flex: 1 1 400px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.col__title {
  font-size: 18px;
  font-weight: 600;
}

.item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item__name {
  font-weight: 600;
}

.item__time {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--muted);
}

.item__text {
  margin: 8px 0 0;
  color: #3a4557;
}

.item__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 8px 0 0;
  padding-left: 20px;
  color: #3a4557;
}
</style>
