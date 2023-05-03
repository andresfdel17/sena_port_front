
import { IImageProps } from '@interfaces/Assets';
import React from 'react';

export const ImageAssets = (props: IImageProps) => {
  return (
    <img src={`./${props.image}`} alt={props.image} />
  )
}
