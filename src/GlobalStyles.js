import { StyleSheet } from 'react-native';

const colors = {
  darkText: 'rgba(10,10,10,255)',
  lightText: 'rgba(230,230,230,255)',
  darkAccent: '#370052',
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
    padding: 10,
    backgroundColor: colors.darkAccent,
  },

  boldLine: {
    marginBottom: 15,
    fontWeight: 'bold',
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
    padding: 20,
    borderWidth: 1,
    borderColor: colors.barelyVisibleGrey,
  },

  scrollView: {
    flexShrink: 0,
    height: '100%',
  },

  contentContainer: {
    paddingBottom: 30,
    marginBottom: 25,
    height: '100%',
    flexGrow: 1,
    flexShrink: 0,
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

  cardTitle: {
    fontSize: sizes.text.medium,
    marginBottom: 15,
  },

  listItemText: {
    borderColor: colors.barelyVisibleGrey,
  },

  listItem: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.barelyVisibleGrey,
  },

  viewPagerPageStyle: {
    backgroundColor: colors.darkAccent,
    height: '100%',
    width: '100%',
    padding: 10,
    flexGrow: 0,
    flexShrink: 0,
  },

  listItemCard: {
    backgroundColor: 'white',
    elevation: 1,
    flex: 1,
    flexGrow: 1,
    flexShrink: 0,
    width: '98%',
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginVertical: 5,

    borderRadius: 5,
  },
});

export { GlobalStyles, colors };
