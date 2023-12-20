'use server';

import { supabase } from '@devchallenges/lib';

import { Database } from '../lib/supabase.types';

export const addPhoto = async (label: string, photoURL: string) =>
  await supabase<Database>()
    .from('photos')
    .insert({ label, photo_url: photoURL });

export const deletePhoto = async (id: string) =>
  await supabase<Database>().from('photos').delete().match({ id });
