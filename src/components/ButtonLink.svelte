<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  let { children, ...props }: Omit<HTMLAnchorAttributes, 'class'> = $props();
</script>

<a
  {...props}
  class="bg-ripe-mango cursor-pointer rounded-xl p-1 text-center font-semibold text-white"
>
  {@render children?.()}
</a>
