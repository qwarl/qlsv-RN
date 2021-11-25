import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, StatusBar } from 'react-native';
import Swipeout from 'react-native-swipeout';
const Flatlist = () => {
    const [MaSV, setMaSV] = useState();

    const [Ten, setTen] = useState();

    const [Lop, setLop] = useState();
    const [SuaMaSV, setSuaMaSV] = useState();
    const [SuaLop, setSuaLop] = useState();
    const [SuaTen, setSuaTen] = useState();

    const [EditDialog, setEditDialog] = useState(false);
    const [SinhVien, setSinhVien] = useState([{
        maSV: 'ps10962',
        ten: "quan",
        lop: 'PM1801'
    },
    {
        maSV: 'ps10462',
        ten: "thong",
        lop: 'PM1801'
    },
    {
        maSV: 'ps10952',
        ten: "thai",
        lop: 'PM1801'
    }]);

    const sendInfo = () => {

        setSinhVien([...SinhVien, { maSV: MaSV, ten: Ten, lop: Lop }]);
        setMaSV('');
        setLop('');
        setTen('');

    }

    const xoaSV = (msv) => {
        setSinhVien(
            prev => {
                return prev.filter(sv => sv.maSV != msv);
            }
        );
    }
    const suaSV = (itemSV) => {

        setSuaMaSV(itemSV.maSV);
        setSuaTen(itemSV.ten);
        setSuaLop(itemSV.lop);
        setEditDialog(true);
    }

    //chen vao day

    const suaSVDialog = () => {
        SinhVien.forEach(sv => {
            if (sv.maSV == SuaMaSV) {
                sv.ten = SuaTen;
                sv.lop = SuaLop;
                // setSinhVien([...SinhVien, { maSV: SuaMaSV, ten: SuaTen, tuoi: SuaTuoi, lop: SuaLop }]);
                setEditDialog(false);
            }
        });

    }


    //tao list item hoc sinh 
    const ListItem = (props) => {
        const swipeoutSettings = {
            autoClose: true,
            onclose: () => {
                console.log('Close swipeout');
            },
            onOpen: () => {
                console.log('Open swipeout');
            },
            right: [
                {
                    text: 'Update',
                    type: 'secondary',
                    onPress: () => {
                        suaSV(props.item);
                        console.log('Update');
                    }
                },
                {
                    text: 'Delete',
                    type: 'delete',
                    onPress: () => {
                        xoaSV(props.item.maSV);
                        console.log('Delete');
                    }

                }

            ]
        };
        return (
            <Swipeout {...swipeoutSettings}>
                <View style={styles.listContainer}>
                    <Text style={{ marginLeft: 10, fontSize: 20 }}>Tên: {props.item.ten}</Text>
                    <Text style={styles.itemSinhVien}>MSSV: {props.item.maSV}</Text>
                    <Text style={styles.itemSinhVien}>Lớp: {props.item.lop}</Text>
                </View>
            </Swipeout>
        )
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.inputType} value={MaSV} placeholder='Ma Sinh vien' onChangeText={(msv) => setMaSV(msv)} />
            <TextInput style={styles.inputType} value={Ten} placeholder='Sinh vien' onChangeText={(sv) => setTen(sv)} />
            <TextInput style={styles.inputType} value={Lop} placeholder='Lop' onChangeText={(lop) => setLop(lop)} />
            <TouchableOpacity onPress={sendInfo} style={styles.button}>
                <Text>SEND</Text>
            </TouchableOpacity>
            {/* <FlatList
                keyExtractor={item => item.maSV}
                data={SinhVien}
                renderItem={
                    ({ item }) => (
                        <View>
                            <Text>MaSV: {item.maSV} | Ten: {item.ten} | Lop: {item.lop}</Text>
                            <TouchableOpacity onPress={() => xoaSV(item.maSV)}><Text>Xoa</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => suaSV(item)}><Text>Sua</Text></TouchableOpacity>
                        </View>
                    )
                }
            /> */}
            <FlatList
                keyExtractor={item => item.maSV}
                data={SinhVien}
                renderItem={
                    ({ item }) => <ListItem item={item} />
                } />
            {
                EditDialog && (
                   
                        <View style={styles.EditSV}>
                            <Text>Sua Sinh Vien</Text>
                            <TextInput style={styles.inputType} value={SuaMaSV} placeholder='Ma Sinh vien' editable={false} onChangeText={(msv) => setSuaMaSV(msv)} />
                            <TextInput style={styles.inputType} value={SuaTen} placeholder='Sinh vien' onChangeText={(sv) => setSuaTen(sv)} />
                            <TextInput style={styles.inputType} value={SuaLop} placeholder='Lop' onChangeText={(lop) => setSuaLop(lop)} />
                            <TouchableOpacity onPress={suaSVDialog}><Text>Sua</Text></TouchableOpacity>
                        </View>
                    
                )
            }

        </View>
    )
}

export default Flatlist
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
    },
    inputType: {
        borderColor: 'black',
        margin: 5,
        height: 30,
        padding: 5,
        backgroundColor: '#fffc46',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
    },
    button: {
        borderWidth: 1,
        backgroundColor: 'coral',
        // width:'100%',
        marginLeft: 140,
        marginRight: 140,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',

    },
    EditSV: {
        width: '100%',
        height: 200,
        backgroundColor: 'pink',
        position: 'absolute',
        top: 70,
        // zIndex:-1,
    },
    listContainer: {
        backgroundColor: '#f1f1f1',
        // flexDirection:'row',
        margin: width * 3.6 / 187.5,
        padding: width * 3.6 / 187.5,
        borderRadius: width * 3.6 / 187.5,
        width: '100%'
    },
    itemSinhVien: {
        marginLeft: 10,
    },
})
