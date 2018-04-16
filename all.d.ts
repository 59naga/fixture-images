declare module 'fixture-images' {
  interface IAnimatableImages<T> {
    gif: T;
    png: T;
    jpg: T;
  }

  interface IStillImages<T> {
    jpg: T;
    jxr: T;
    bmp: T;
    psd: T;
    tif: T;
  }

  interface IImageCollection<T> {
    still: IStillImages<T> & IAnimatableImages<T>;
    animated: IAnimatableImages<T>
  }

  interface IFixtureImages extends IImageCollection<Buffer> {
    path: IImageCollection<string>;
    http: IImageCollection<string>;
    https: IImageCollection<string>;
  }

  const fixtureImages: IFixtureImages;
  export = fixtureImages
}
