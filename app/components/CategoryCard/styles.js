import { StyleSheet } from "react-native";

const styles = (active) => {
    switch (active) {
        case true:
            return StyleSheet.create({
                mainBlock: {
                    height: 75,
                    width: 90,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 7,
                    borderWidth: 1,
                    borderColor: '#0d3b66',
                    marginRight: 8,
                    shadowColor: '#23cff2',
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 0.60,
                    shadowRadius: 20
                },
                descriptionText: {
                    color: 'white',
                    fontSize: 11,
                    marginTop: 3
                },
                image: {
                    height: 25,
                    width: 25
                }
            });
        case false:
            return StyleSheet.create({
                mainBlock: {
                    height: 70,
                    width: 85,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 7,
                    borderWidth: 1,
                    borderColor: '#0d3b66',
                    marginRight: 8
                },
                descriptionText: {
                    color: '#b4bec8',
                    fontSize: 11,
                    marginTop: 3
                },
                image: {
                    height: 25,
                    width: 25
                }
            });
    }
}

export default styles;