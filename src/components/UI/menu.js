import React from 'react'
import { Link as RebassLink, Box } from "rebass/styled-components";

const Menu = ({ query, location = 'header', themeVariant, nest }) => {

  const nesting = nest
  const menuQuery = location === 'footer' ? query.footerMenu.menuItems.nodes : query.headerMenu.menuItems.nodes

  // список пунктов меню в структурированный список
  const flatListToHierarchical = (
    data = [],
    { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
  ) => {
    const tree = []
    const childrenOf = {}
    data.forEach(item => {
      const newItem = { ...item }
      const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
      childrenOf[id] = childrenOf[id] || []
      newItem[childrenKey] = childrenOf[id]
      parentId
        ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
        : tree.push(newItem)
    })
    return tree
  }
  const hierarchicalMenu = flatListToHierarchical(menuQuery)

  const Menu = ({ items, menuIndex = 0, nesting }) => {
    ++menuIndex
    if (menuIndex >= nesting) return ''
    return (
      <Box as="ul" variant={themeVariant} className={`menu_${menuIndex}`}>
        {items.map(item => (
          <li key={item.id}>
            <RebassLink sx={{ py: ['5px', '8px', '12px'], px: ['5px', '8px', '10px'] }} href={item.url}>{item.label}</RebassLink>
            {item.children.length > 0 && <Menu items={item.children} menuIndex={menuIndex} nesting={nesting} />}
          </li>
        ))}
      </Box>

    )
  }

  return (
    <Menu items={hierarchicalMenu} nesting={nesting} />
  )
}

export default Menu
