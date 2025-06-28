<script lang="ts">
  type Props = {
    title: string | null;
    image: string | null;
  };

  let { title, image }: Props = $props();
</script>

<article class="overflow-clip rounded-xl shadow">
  <p class="text-center">{title}</p>
  <div class="aspect-square">
    {#if image}
      <img class="size-full object-cover" src={image} alt={title} />
    {/if}
  </div>
</article>
