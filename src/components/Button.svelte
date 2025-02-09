<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';

  let { children, ...props }: Omit<HTMLButtonAttributes, 'class'> = $props();
</script>

<button
  {...props}
  class="bg-ripe-mango cursor-pointer rounded-xl p-1 font-semibold text-white"
>
  {@render children?.()}
</button>
