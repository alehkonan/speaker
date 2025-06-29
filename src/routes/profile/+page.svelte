<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<div>
  <p>{data.user.id}</p>
  <p>{data.user.email}</p>
</div>
