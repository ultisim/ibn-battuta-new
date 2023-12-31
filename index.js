/* global Audio */
import { World, part } from 'lively.morphic';
import { InTheFootstepsHolder } from './ui/footsteps-holder.cp.js';
import { Color } from 'lively.graphics';
import { resource } from 'lively.resources';

/*
  rms 23.08.23: In order to embedd the resulting interactive as an iframe that functions as an overaly, you need to set the allowtransparency attribute to true, like so:

<iframe src="http://localhost:9011/local_projects/engageLively--ibn-battuta-new/build/index.html" style="background: transparent;height: 100%;width: 100%;border: 0px;" allowtransparency="true"></iframe>

*/
export async function main () {
  $world.fill = Color.transparent;
  window.document.body.style.background = 'transparent';
  const holder = part(InTheFootstepsHolder, { name: 'funny adventures with ibn' }).openInWorld();
  if (resource(document.location).query().playIntro) holder.showStartButton();
  if (resource(document.location).query().showPacks) holder.showPacks();
  if (resource(document.location).query().startPackSelection) holder.startPackSelection();
}

export const WORLD_CLASS = World;
