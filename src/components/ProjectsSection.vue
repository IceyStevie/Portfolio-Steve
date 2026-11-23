<template>
  <section id="proyek" class="section section--paper">
    <div class="wrap">
      <div class="head">
        <div>
          <div class="eyebrow">Proyek pilihan</div>
          <h2 class="h2">Proyek yang bisa Anda buka dan coba.</h2>
        </div>
        <div class="filters" role="group" aria-label="Filter proyek">
          <button
            v-for="f in filters"
            :key="f.value"
            type="button"
            class="chip"
            :class="{ 'chip--on': aktif === f.value }"
            :aria-pressed="aktif === f.value"
            @click="aktif = f.value"
          >
            {{ f.label }}
          </button>
        </div>
      </div>

      <div class="list">
        <article v-for="p in tampil" :key="p.id" class="card">
          <div class="card__col">
            <div class="card__type">{{ p.tipe.toUpperCase() }}</div>
            <h3 class="card__title">{{ p.nama }}</h3>
            <p class="card__text">{{ p.deskripsi }}</p>
            <div class="card__tags">
              <span v-for="s in p.stack" :key="s" class="tag">{{ s }}</span>
            </div>
          </div>

          <div class="card__col">
            <div class="card__label">Peran saya</div>
            <p class="card__text">{{ p.peran }}</p>
            <div class="card__label">Hasil</div>
            <ul class="card__list">
              <li v-for="h in p.hasil" :key="h">{{ h }}</li>
            </ul>
            <div class="card__links">
              <template v-for="t in p.tautan" :key="t.label">
                <a v-if="t.url" :href="t.url" target="_blank" rel="noopener">{{ t.label }}</a>
                <span v-else class="card__soon">{{ t.label }} [URL]</span>
              </template>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import data from 'src/data/portfolio'

const filters = [
  // { value: 'semua', label: 'Semua' },
  // { value: 'frontend', label: 'Frontend' },
  // { value: 'backend', label: 'Backend' },
  // { value: 'fullstack', label: 'Fullstack' }
]

const aktif = ref('semua')

const tampil = computed(() =>
  aktif.value === 'semua' ? data.proyek : data.proyek.filter((p) => p.tipe === aktif.value)
)
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 32px;
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  min-height: 44px;
  padding: 0 18px;
  border: 1px solid var(--ink);
  border-radius: 999px;
  background: transparent;
  color: var(--ink);
  font: 500 14px Inter, sans-serif;
  cursor: pointer;

  &--on {
    background: var(--ink);
    color: #ffffff;
  }
}

.list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.card {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 32px;
  border: 1px solid var(--line);
  border-radius: 4px;
  background: #f7f9fb;
}

.card__col {
  flex: 1 1 380px;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card__type {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  font-weight: 500;
  color: var(--accent);
}

.card__title {
  margin: 0;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.2;
}

.card__text {
  margin: 0;
  color: #3a4557;
}

.card__label {
  font-weight: 600;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.card__list {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding-left: 20px;
  color: #3a4557;
}

.card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
  font-size: 15px;
  font-weight: 600;

  a,
  .card__soon {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
  }
}

.card__soon {
  color: var(--muted);
}

@media (max-width: 600px) {
  .card {
    padding: 20px;
  }
}
</style>
