import { StyleSheet } from 'react-native';
import { IColors } from '../../../../../src/UIProvider/colorTheme';
import { FONTS } from '../../../../../src/utils/Fonts';
import { scaleHorizontal, scaleVertical } from '../../../../../src/utils/Utils';

export const getStyle = (colors: IColors, isBanner: boolean) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: scaleVertical(14)
        },
        mediaWrapper: {
            width: '100%',
            height: isBanner ? scaleHorizontal(271) : scaleHorizontal(222),
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            width: isBanner ? '100%' : scaleHorizontal(222),
            height: isBanner ? '100%' : scaleHorizontal(222),
        },
        video: {
            width: '100%',
            height: scaleHorizontal(271),
        },
        title: {
            ...FONTS.TITLE_32,
            color: colors.regularText,
            textAlign: 'center',
            marginTop: scaleVertical(25),
            marginHorizontal: scaleHorizontal(20),
        },
        timeWrapper: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: scaleVertical(15),
        },
        timeText: {
            ...FONTS.TEXT_REGULAR_18,
            fontWeight: '400',
            color: colors.focusedTab,
            textAlign: 'center',
            marginLeft: scaleHorizontal(6),
        }
    });
    return styles;
}
