import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get('window');
const ratio = win.width / 375;

export default StyleSheet.create({
  rootScrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  homeHeader: {
    width: '100%',
    height: 70,
    backgroundColor: '#72C500',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgBack: {
    marginLeft: 20,
    width: 13,
    height: 24,
  },
  headerTitle: {
    position: 'absolute',
    left: (win.width / 2) - 100,
    width: 200,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  viewMenu: {
    height: 40,
    backgroundColor: 'rgba(114,197,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    alignSelf: 'center',
    width: 268 * ratio,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 8,
  },
  inputContainerStyle: {
    borderWidth: 0,
    height: 50,
  },
  listContainerStyle: {
  },
  listStyle: {
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 2,
  },
  textInput: {
    flex: 1,
    height: 50,
    alignSelf: 'center',
    color: 'black',
    marginLeft: 10,
    marginRight: 10,
  },
  viewHeart: {
    width: 55,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF4600',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  imgHeart: {
    width: 26,
    height: 22,
  },
  imgDown: {
    width: 26,
    height: 22,
  },
  dropdownItem: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    justifyContent: 'center',
  },
  viewDelay: {
    width: 350 * ratio,
    alignSelf: 'center',
    marginTop: 18,
    marginBottom: 18,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
  },
  textDelay: {
    marginBottom: 5,
  },
  viewFooter: {
    height: 78,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(114,197,0,0.2)',
  },
  btnApply: {
    width: 250,
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#72C500',
  },
  viewUpload: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderStyle: 'dashed',
    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgUpload: {
    width: 30,
    height: 30,
  },
  viewUrl: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAdditional: {
    flexDirection: 'row',
    height: 40,
    marginLeft: 12,
    marginRight: 12,
    alignItems: 'center',
  },
  textAdditional: {
    width: 80,
  },
  addiContent: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F1F1',
    paddingLeft: 5,
    paddingRight: 5,
  },
  addiClose: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  textAddmore: {
    marginLeft: 15,
  },
  budgetWrapper: {
    width: 268 * ratio,
    height: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    zIndex: 300,
  },
  budgetItemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
    marginRight: 3,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    borderRadius: 8,
  },
  selectedViewTag: {
    width: 268 * ratio,
    height: 45,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#72C500',
    borderRadius: 8,
  },
  selectedTxtTag: {
    color: '#72C500',
    fontSize: 14,
  },
});
