<script lang="ts">
  import Card from '$components/Card.svelte';
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

{#if data.words}
  <section class="grid grid-cols-4 gap-3 p-5">
    {#each data.words as word}
      <Card title={word.name_en} image={word.picture_url} />
    {/each}
  </section>
{:else}
  <p>No data</p>
{/if}
