<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the game introduction in a dedicated React component with Motion transitions, so future gameplay can remain separate.
- Use a client-only Web Audio instrumental with an autoplay attempt and first-interaction fallback, so browser audio restrictions are respected without external music services.
- Store uploaded cinematic media as Lovable Assets pointers, so the repository stays lightweight.
- Select portrait scene edits with HTML picture sources by orientation; keep edited artwork as bundled images, so phones avoid cropping the landscape compositions and unnecessary downloads.
- Keep the Continue transition inside the intro with no simulated gameplay or server loading, so the introduction remains separate from the future world.
