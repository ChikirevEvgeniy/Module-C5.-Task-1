const parser = new DOMParser();

//XML:
const xmlString = `
<list>
    <student>
    <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
    </student>
    <student>
    <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
    </student>
</list>
`;

//console.log('xmlString', xmlString);

//Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml");
let result = [];

//Получение DOM-нод
const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelectorAll("student");

const nameNode1 = studentNode[0].querySelector("name");
const langNode1 = nameNode1.getAttribute('lang');
const firstNode1 = nameNode1.querySelector("first").innerHTML;
const secondNode1 = nameNode1.querySelector("second").innerHTML;
const ageNode1 = studentNode[0].querySelector("age").innerHTML;
const profNode1 = studentNode[0].querySelector("prof").innerHTML;
const result1 = {
    name: firstNode1+' '+secondNode1,
    age: ageNode1,
    prof: profNode1,
    lang: langNode1,
};

result.push(result1);

const nameNode2 = studentNode[1].querySelector("name");
const langNode2 = nameNode2.getAttribute('lang');
const firstNode2 = nameNode2.querySelector("first").innerHTML;
const secondNode2 = nameNode2.querySelector("second").innerHTML;
const ageNode2 = studentNode[1].querySelector("age").innerHTML;
const profNode2 = studentNode[1].querySelector("prof").innerHTML;
const result2 = {
    name: firstNode2+' '+secondNode2,
    age: ageNode2,
    prof: profNode2,
    lang: langNode2,
};

result.push(result2);
console.log(result);