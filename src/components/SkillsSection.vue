<template>
  <section id="keahlian" class="section">
    <div class="wrap">
      <div class="eyebrow">Keahlian</div>
      <h2 class="h2">Alat yang saya pakai setiap hari.</h2>

      <div class="groups">
        <div v-for="g in data.keahlian" :key="g.grup" class="group">
          <div class="group__title">{{ g.grup }}</div>
          <div class="group__items">
            <span v-for="i in g.item" :key="i" class="tag tag--line">{{ i }}</span>
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
.groups {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 32px;
}

.group {
  flex: 1 1 280px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.group__title {
  padding-bottom: 8px;
  border-bottom: 2px solid var(--accent);
  font-size: 18px;
  font-weight: 600;
}

.group__items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
