import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
const Flatlist = () => {
    const [MaSV, setMaSV] = useState();
    const [SuaMaSV, setSuaMaSV] = useState();
    const [Ten, setTen] = useState();
    const [SuaTen, setSuaTen] = useState();
    const [Tuoi, setTuoi] = useState();
    const [SuaTuoi, setSuaTuoi] = useState();
    const [Lop, setLop] = useState();
    const [SuaLop, setSuaLop] = useState();
    const [EditDialog, setEditDialog] = useState(false);
    const [SinhVien, setSinhVien] = useState([{
        maSV: 'ps10962',
        ten: "quan",
        tuoi: '23',
        lop: 'PM1801'
    },
    {
        maSV: 'ps10462',
        ten: "thong",
        tuoi: '22',
        lop: 'PM1801'
    },
    {
        maSV: 'ps10952',
        ten: "thai",
        tuoi: '19',
        lop: 'PM1801'
    }]);

    const sendInfo = () => {

        setSinhVien([...SinhVien, { maSV: MaSV, ten: Ten, tuoi: Tuoi, lop: Lop }]);
        setMaSV('');
        setLop('');
        setTen('');
        setTuoi('');

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
        setSuaTuoi(itemSV.tuoi);
        setSuaLop(itemSV.lop);
        setEditDialog(true);
    }
    const EditSV = () => {
        const suaSVDialog = () => {
            SinhVien.forEach(sv => {
                if (sv.maSV == SuaMaSV) {
                    sv.ten = SuaTen;
                    sv.tuoi = SuaTuoi;
                    sv.lop = SuaLop;
                    // setSinhVien([...SinhVien, { maSV: SuaMaSV, ten: SuaTen, tuoi: SuaTuoi, lop: SuaLop }]);
                    setEditDialog(false);
                }
            });

        }
        return (
            <View style={styles.EditSV}>
                <Text>Sua Sinh Vien</Text>
                <TextInput style={styles.inputType} value={SuaMaSV} placeholder='Ma Sinh vien' editable={false} onChangeText={(msv) => setSuaMaSV(msv)} />
                <TextInput style={styles.inputType} value={SuaTen} placeholder='Sinh vien' onChangeText={(sv) => setSuaTen(sv)} />
                <TextInput style={styles.inputType} value={SuaTuoi} placeholder='Tuoi' onChangeText={(tuoi) => setSuaTuoi(tuoi)} />
                <TextInput style={styles.inputType} value={SuaLop} placeholder='Lop' onChangeText={(lop) => setSuaLop(lop)} />
                <TouchableOpacity onPress={suaSVDialog}><Text>Sua</Text></TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={{ width: '100%' }}>
            <TextInput style={styles.inputType} value={MaSV} placeholder='Ma Sinh vien' onChangeText={(msv) => setMaSV(msv)} />
            <TextInput style={styles.inputType} value={Ten} placeholder='Sinh vien' onChangeText={(sv) => setTen(sv)} />
            <TextInput style={styles.inputType} value={Tuoi} placeholder='Tuoi' onChangeText={(tuoi) => setTuoi(tuoi)} />
            <TextInput style={styles.inputType} value={Lop} placeholder='Lop' onChangeText={(lop) => setLop(lop)} />
            <TouchableOpacity onPress={sendInfo} style={styles.button}>
                <Text>SEND</Text>
            </TouchableOpacity>
            <FlatList
                keyExtractor={item => item.maSV}
                data={SinhVien}
                renderItem={
                    ({ item }) => (
                        <View>
                            <Text>MaSV: {item.maSV} | Ten: {item.ten} | Tuoi: {item.tuoi} | Lop: {item.lop}</Text>
                            <TouchableOpacity onPress={() => xoaSV(item.maSV)}><Text>Xoa</Text></TouchableOpacity>
                            <TouchableOpacity onPress={() => suaSV(item)}><Text>Sua</Text></TouchableOpacity>
                        </View>
                    )
                }
            />

            {
                EditDialog && (
                    <EditSV />
                )
            }

        </View>
    )
}

export default Flatlist

const styles = StyleSheet.create({
    inputType: {
        borderColor: 'black',
        margin: 5,
        height: 30,
        paddingLeft: 10,
        width: '90%',
        backgroundColor: '#fffc46',
        // alignItems: 'center',
        // justifyContent: 'center',
        borderWidth: 1,
        // marginRight:10
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
    }
})
