<script lang="ts">
  import Button from '$components/Button.svelte';
  import ButtonLink from '$components/ButtonLink.svelte';
  import { loginWithGoogle } from '$lib/supabase';
  import FieldWithMountains from './FieldWithMountains.svelte';
  import Hill from './Hill.svelte';
  import Logo from './Logo.svelte';

  const APP_NAME = 'Speak georgian app';
</script>

<div class="flex h-screen flex-col justify-end">
  <div class="fixed -z-10 grid size-full place-items-center">
    <FieldWithMountains />
    <Logo />
  </div>
  <div class="relative flex flex-col items-center justify-end">
    <Hill />
    <div class="flex w-4/5 max-w-xl flex-col gap-2 pb-10">
      <h1 class="text-ripe-mango text-center text-xl font-bold">
        {APP_NAME}
      </h1>
      <ButtonLink href="/">Words</ButtonLink>
      <hr />
      <Button onclick={loginWithGoogle}>Login with Google</Button>
    </div>
  </div>
</div>
