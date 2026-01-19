# Troubleshooting Guide

## ChunkLoadError Fixes

If you encounter chunk loading errors, try these steps:

### 1. Clear Build Cache
```bash
# Delete .next folder
rm -rf .next
# or on Windows:
rmdir /s /q .next
```

### 2. Clear Node Modules (if needed)
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### 3. Restart Development Server
```bash
npm run dev
```

## Common Issues

### Issue: Client Component in Server Component
**Error**: "You're importing a component that needs 'use client'"

**Solution**: Make sure all components using hooks or browser APIs have `'use client'` at the top.

### Issue: Hydration Mismatch
**Error**: "Hydration failed because the initial UI does not match"

**Solution**: 
- Use `suppressHydrationWarning` on html tag (already done)
- Avoid using `window` or `document` in server components
- Use `useEffect` for client-only code

### Issue: Build Errors
**Solution**:
1. Check TypeScript errors: `npm run build`
2. Clear cache: Delete `.next` folder
3. Reinstall dependencies if needed

## Fixed Issues

✅ **Layout Chunk Error** - Fixed by:
- Creating `Providers.tsx` wrapper for client components
- Moving script tag from head to body
- Proper separation of server and client components

## Getting Help

If issues persist:
1. Check the console for specific error messages
2. Verify all imports are correct
3. Ensure all client components have `'use client'` directive
4. Check that TypeScript compilation is successful


