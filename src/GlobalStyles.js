import { StyleSheet } from 'react-native';

const colors = {
  darkText: 'rgba(10,10,10,255)',
  lightText: 'rgba(230,230,230,255)',
  darkAccent: '#370052',
  positiveAccent: 'green',
  negativeAccent: 'black',
  grey: 'rgba(215,215,215,255)',
  lightAccent: 'purple',
  barelyVisibleGrey: 'rgba(0,0,0,.2)',
};

const sizes = {
  text: {
    small: 12,
    medium: 20,
    large: 24,
  },
  paddings: {
    none: 0,
    small: 5,
    medium: 15,
    large: 30,
  }
};

const GlobalStyles = StyleSheet.create({
  rootAppContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    flexGrow: 1,
    flexShrink: 0,
    height: '100%',
    width: '100%',
    padding: sizes.paddings.small,
    backgroundColor: colors.darkAccent,
  },

  viewPagerPageStyle: {
    height: '100%',
    width: '100%',
    padding: sizes.paddings.small,
    flexGrow: 0,
    flexShrink: 0,
    backgroundColor: colors.darkAccent,
  },

  lightText: {
    color: colors.lightText,
  },
  section: {
    marginBottom: 15,
  },

  positiveTextColor: {
    color: colors.positiveAccent,
  },

  smallPadTop: {
    paddingTop: sizes.paddings.medium
  },

  negativeTextColor: {
    // color: colors.negativeAccent,
  },

  boldLine: {
    fontWeight: 'bold',
  },

  noPad: {
    paddingVertical: sizes.paddings.none,
    paddingHorizontal: sizes.paddings.none,
    paddingTop: sizes.paddings.none,
  },

  card: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 5,
    alignSelf: 'center',
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    padding: sizes.paddings.medium,
    borderWidth: 1,
    borderColor: colors.barelyVisibleGrey,
  },

  cardTitleView: {
    backgroundColor: 'white',
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderColor: colors.barelyVisibleGrey,
    elevation: 3,
  },

  cardPad: {
    padding: sizes.paddings.medium
  },

  cardTitle: {
    fontSize: sizes.text.medium,
  },

  scrollView: {
    flexShrink: 0,
    height: '100%',
  },

  contentContainer: {
    paddingBottom: 50,
  },
  contentContainerExtraPad: {
    paddingBottom: 60,
  },

  justifyFlexStart: {
    justifyContent: 'flex-start',
  },

  defaultText: {
    fontSize: 20,
  },

  marginBottom: {
    marginBottom: 15,
  },

  padBottom15: {
    paddingBottom: 15,
  },

  centered: {
    textAlign: 'center',
  },

  btn: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.barelyVisibleGrey,
    marginBottom: 10,
  },

  actionBtn: {
    backgroundColor: 'black',
    width: '80%',
    alignSelf: 'center',
  },

  actionBtnText: {
    color: 'white',
  },

  listItemText: {
    borderColor: colors.barelyVisibleGrey,
  },

  listItem: {
    flex: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.barelyVisibleGrey,
  },

  listItemCardTextLine: {
    width: '100%',
  },

  bottomAccent: {
    borderBottomWidth: 4,
    borderColor: colors.darkAccent,
  },

  column: {
    paddingRight: sizes.paddings.medium,
    flexShrink: 1,
  },

  spaceBetween: {    
    justifyContent: 'space-between',
  },

  listItemCard: {
    elevation: 1,
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 5,
    marginVertical: 5,
    alignItems: 'center',

    borderRadius: 5,
  },
});

export { GlobalStyles, colors };
