import {colors, fonts} from './fundations'

const theme = () => {
  return({
    /* Colors */
    brandColor: colors.color.brand,
    secondaryColor: colors.color.blue,
    textColor: colors.color.black,
    backgroundColor: colors.color.white.background,
    headerBackgroundColor: colors.color.white.header,
    gray200Color: colors.color.gray.g200,
    gray500Color: colors.color.gray.g500,
    gray800Color: colors.color.gray.g800,
    gray1000Color: colors.color.gray.g1000,

    /* Fonts */
    primaryFont: fonts.primaryFont,
    secondaryFont: fonts.secondaryFont,
    weight: fonts.weight,
  })
}

export default theme
