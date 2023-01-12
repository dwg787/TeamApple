import { useState } from 'react';
import styled from '@emotion/native';
import { Modal } from 'react-native';

export default function Review({
  isOpenModal,
  setIsOpenModal,
  setReviews,
  isEdit,
  reviews,
  setIsEdit,
  id,
}) {
  const [addContent, setAddcontent] = useState('');

  // console.log(addContent);

  const editReview = () => {
    const newReviews = [...reviews];
    const idx = newReviews.findIndex((review) => review.id === id);
    newReviews[idx].contents = addContent;
    newReviews[idx].isEdit = false;
    setAddcontent();
    setIsEdit(false);
    setReviews(newReviews);
    setIsOpenModal(false);
  };
  // console.log(reviews);

  // 1. 문의 추가 (add)
  const newReview = {
    id: Date.now(),
    contents: addContent,
    isEdit: false,
  };

  const addReview = () => {
    setReviews((prev) => [...prev, newReview]);
    setAddcontent('');
    setIsOpenModal(false);
  };

  return (
    <Modal visible={isOpenModal} transparent={true} animationType='slide'>
      <Backdrop>
        <Dialog>
          <InputWrapper>
            <ModalTitle>애플펫에 무엇이든 물어보세요!</ModalTitle>
            <ModalTitle>내용</ModalTitle>
            <ContentInput
              textAlignVertical='top'
              value={addContent}
              onChangeText={setAddcontent}
              multiline
              maxLength={300}
            />
          </InputWrapper>
          <Row style={{ justifyContent: 'space-between' }}>
            <BtnWrapper>
              <ModalBtn
                onPress={() => setIsOpenModal(false)}
                title='취소'
                color='#f19936'
              />
            </BtnWrapper>
            <BtnWrapper2>
              <ModalBtn
                onPress={isEdit ? () => editReview() : addReview}
                title={isEdit ? '수정' : '완료'}
                color='white'
              />
            </BtnWrapper2>
          </Row>
        </Dialog>
      </Backdrop>
    </Modal>
  );
}

const TitleInput = styled.TextInput`
  padding: 10px;
  background-color: white;
  border-radius: 5px;
`;
const ContentInput = styled(TitleInput)`
  min-height: 150px;
`;
const BtnWrapper = styled.View`
  padding: 2px 20px;
  border-radius: 20px;
  border-color: #f19936;
  margin-top: 20px;
  margin-right: 20px;
  border-width: 1px;
`;
const BtnWrapper2 = styled.View`
  padding: 2px 20px;
  border-radius: 20px;
  border-color: #f19936;
  background-color: #f19936;
  margin-top: 20px;
  border-width: 1px;
`;

const ModalBtn = styled.Button`
  background-color: white;
`;
const InputWrapper = styled.KeyboardAvoidingView``;

const Backdrop = styled.View`
  flex: 1;
  /* justify-content: flex-start; */
  justify-content: center;
  align-items: center;
`;
const Dialog = styled.KeyboardAvoidingView`
  background-color: #0c68f2;
  width: 80%;
  height: 45%;
  padding: 20px;
  justify-content: space-between;
  border-radius: 10px;
`;
const ModalTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const Row = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 10px;
`;
