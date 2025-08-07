interface NameValueSource {
  [key: string]: unknown;
}

export const convertToNameValue = <T extends NameValueSource>(
  items: T[] = [],
  nameKey: keyof T = 'name' as keyof T,
  valueKey: keyof T = 'id' as keyof T
): { label: string; value: string }[] => {
  return items.map((item) => ({
    label: String(item[nameKey] ?? item['title'] ?? item['label'] ?? item['name'] ?? ''),
    value: String(item[valueKey] ?? item['uuid'] ?? item['key'] ?? ''),
  }));
};
