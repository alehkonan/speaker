<script lang="ts">
  import Card from '$components/Card.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

{#if data.categories}
  <section class="grid grid-cols-4 gap-3 p-5">
    {#each data.categories as category}
      <a href={`/words?category=${category.id}`}>
        <Card title={category.name_en} image={category.picture_url} />
      </a>
    {/each}
  </section>
{:else}
  <p>No data</p>
{/if}
