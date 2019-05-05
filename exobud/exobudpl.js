<!--
//
// �� �]�w����M�椺�e
//
//   ���㪺�]�w�榡: mkList("�C���ɮצ�m","�C����D","�r���ɮצ�m","�ᵲ�X��(f)");
//   �@�몺�]�w�榡: mkList("�C���ɮצ�m","�C����D");
// �w�]������Y����: mkList("�C���ɮצ�m","�C����D","", "f");
// �۰ʨ��o�C���T: mkList("�C���ɮצ�m");
//
// ����1: �ĤG�ӳ]�w��(�C����D)�@�몺�榡�O�u�t�X�� - ���ؼ��D�v�C
// ����2: �ĥ|�ӳ]�w��(�ᵲ�X��/Frozen Flag)�O�H f �r���Ӫ��ܹw�]��������񦹴C���ɮסC

// �]�w����M�涵�خɡA�Ъ`�N�H�U�U���G
//
//    1. �p�G�z�ϥά۹���|(Relative Path)���覡�ӳ]�w�ɮצ�m�A�г̦n�b�s���e���ϥΦp ./ �� ../ �ӥܷN�ثe
//       �Ҧb����Ƨ��C���z�H������|(Absolute Path)���覡�ӳ]�w�s���ɡA���F http:// �� ftp:// ���~�A�z�]�i
//       �ϥΦp mms:// �� rtsp:// �o�Ǧ�y�B�z�C�骺�q�T��w�C
//
//    2. �p�G�z�Q�n�ϥΦr���\��A�C�鶵�ت��Ĥ@�ӳ]�w��(�C���ɮצ�m)�βĤT�ӳ]�w��(�r���ɮצ�m)�䤤�@���A
//       �����ϥε�����|���覡�ӳ]�w�s���A�_�h�r���\��u�|�b�����B�@�A�Ӧb���ݦ��A���o���Ī��C���~�A�P�C��
//       �ɮ׬۳s���r���ɮסA�̦n�n�ŦX�o��ӱ���G 1.�s��b�ۦP����Ƨ��F 2.�H�ۦP���ɦW�өR�W�C�Ҧp�G�C��
//       �ɦW�� xyz.wmv �N�ϥ� xyz.smi ���r���ɮסC���p�r���ɦW��C���ɦW���@�ˡA�z�����b����M�涵�س]�w��
//       �[�J�ĤT�ӳ]�w��(�r���ɮצ�m)�A���𶷥[�J���|�C�H�U���]�w�d�һ����F�W�z�U�I�G
//
//         ��1: mkList("http://mydomain.com/exobud/video/xyz.wmv","�ڪ��ͬ����q");
//              �ѻ� - �r���ɮ� xyz.smi �s��b�ۦP����Ƨ��A�h�𶷳]�w�u�r���ɮצ�m�v�C
//         ��2: mkList("http://mydomain.com/exobud/video/xyz.wmv","�ڪ��ͬ����q","abc.smi");
//              �ѻ� - �r���ɮצs��b�ۦP����Ƨ��A���ɦW���O�A���]�w�r���ɦW�C
//         ��3: mkList("./music/xyz.wma","�t�X�� - �q�W","http://others.net/lyric/xyz.smi");
//              �ѻ� - �r���ɮצs��b���P���D���A�����ϥε�����|���覡�ӳ]�w�u�r���ɮצ�m�v�C
//         ��4: mkList("http://others.net/music/xyz.wma","�t�X�� - �q�W");
//              �ѻ� - �C���ɮ׻P�r���ɮ׭Ѧs��b���P���D���A�P�ɤS�ŦX�ۦP��Ƨ����ɦW������C
//
//    3. �ϥΥ��^��p�g�b�Φr�����ɮ׸��|�û��O�̫O�I�����k�A�]���i�H�O�Ҧb�j�������p�U��������`Ū���s���C
//       �кɶq�קK�ϥΥ]�t���r�`�r�� (�Ҧp����r������r) �B�S���r���Υb�Ϊťժ��s���F�p�G�i�H���ܡA�b�]�w
//       �s���ɡA�̦n�N�o�Ǥ�r�ഫ���y�H����X�z�A�Ҧp�N�b�Ϊťռg�� %20 �C
//
//    4. ���z�b�]�w�C����D�ɡA�i��|�J�W�@�Ǹ��c�餤�� (Big5) ���P�y�t����r�A�Ҧp����Τ��C�p�G�z�M�w�n
//       �O�d�C��쥻���y�尵���C����D�A�Х��N�o�Ǥ�r�ഫ���� &#12345; ���y������X�z(�YUnicode/�U��X)�A
//       �M��~�n�g��C����D���]�w�ȸ̥h�A�_�h�o�ǥ~�y��r�O�L�k�b���񭱪O�μ���M��W���T��ܥX�Ӫ��C
//
//    5. �p�G�z�ϥΥH�u�۰ʨ��o�C���T�v���覡��Ū���C����D����T�A�Y�b����M�涵�ظ̥u��g�C���ɮצ�m�A
//       �C����D�h�w�]��ܬ��u�����w�C����D(���ݦ۰ʨ��o�C���T)�v�C�b�ǳƶ}�l����Ӧ��خɡA�{���~�|Ū��
//       �C���T�A�M��b���񭱪O�μ���M����ܥX�ӡC(�����񾹩Ҧb���������s��z��A�K�|�^�_���Ӫ����A�C)
//
//    6. �]�����{���O�Q�ηL�n�� Windows Media Player ������x����{���A�ҥH�ä��䴩�H .ra .rm .rv .ram �o��
//       �� RealNetworks ��q���C��榡�Ӽ��񭵰T�ε��T���e�C�Ф��n�b����M�涵�ؤ��[�J�o�ǴC���ɮסC�t�~�A
//       ���{�����M�䴩�L�n�̷s�}�o���uWindows Media ����M��v�ɮ׮榡 (���ɦW�� .wpl)�A���O�]�����榡�|��
//       �}�o�����A�ӥ��{���惡�榡���䴩�i�ण�������A�ҥH��ĳ�ϥΪ����קK�ϥγo���ɮרӻs�@����M��A���D
//       �z�O���{�����}�o�H�������O�s�@�̡A�ι�{���B�@�w���`�J�F�ѡC

// ��������������������������������������������������������������������������������������������������������
//            �H�U���˥�����M�檺���e�A�Цb�]�w�z����������M�槹����A�N�������R���ε��Ѱ_�ӡC
// ��������������������������������������������������������������������������������������������������������
//
// [T1] �U���o�@��O�ϥΤ@�몺�]�w�榡�ӳ]�w����M�涵�� (�O���]�w�u��b�������`��ܦr���A�b�����ϥήɽаѦҤW�z��2�I������)
//mkList("./sample/seattle.wmv","Great Reasons to Visit Seattle (�t�r��)");

// [T2] �U���o�@��P�˨ϥΤF�@��]�w�榡�A���O�C���ɮצ�m�ä��O���{���Ҧb���D��
//mkList("http://web0.puckii.net/puckii/116/116362.tm$","F4 - Can't Help Falling in Love (�}�h���q�v �P���_�� �D�D��)");

// [T3] �U���o�@��ϥΤF�̺�²���]�w�榡�A�C�骺���D�N�|�۰ʱq�C���ɮץ�������Ū��
//mkList("./sample/seattle.wmv");

// [T4] �U���o�@��ϥΤF���㪺�]�w�榡�A�b�ĥ|�ӳ]�w�Ȥ��� "f" ���ܳo�ӴC���ɮרä��|�w�]����A���ϥΪ̤��i�H�b����M��W��ܬO�_����
//mkList("http://myweb.hinet.net/home1/andy1234/S.H.E-SUPERSTAR.wma","S.H.E-SUPERSTAR","","f");

// ��������������������������������������������������������������������������������������������������������
//          �z�i�H�b�U���ťժ��a�� ( �]�w���e�����g�b //--> �аO���e )�A�}�l�]�w�z����������M��C
// ��������������������������������������������������������������������������������������������������������

mkList("http://140.113.52.129:8000","goto & player");


//-->